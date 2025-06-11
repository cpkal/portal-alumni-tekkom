FROM litespeedtech/openlitespeed:latest

# Install PHP dependencies
RUN apt-get update && apt-get install -y \
    unzip curl git nano php-cli php-mbstring php-xml php-curl php-bcmath php-mysql

# Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set workdir
WORKDIR /var/www/html

# Copy entire project
COPY . .

# Laravel setup
RUN composer install --optimize-autoloader --no-dev \
 && php artisan config:cache \
 && php artisan route:cache \
 && php artisan view:cache

# Permissions
RUN chown -R nobody:nogroup storage bootstrap/cache

# Copy vhost config & SSL
COPY docker/litespeed/vhost.conf /usr/local/lsws/conf/vhosts/Example/vhost.conf
COPY docker/litespeed/ssl /usr/local/lsws/conf/cert
