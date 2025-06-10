import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';


type RegisterForm = {
    name: string;
    email: string;
    nim: string;
    graduation_year: string;
    active_phone_number: string;
    date_of_birth: string;
    password: string;
    password_confirmation: string;
};

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm<Required<RegisterForm>>({
        name: '',
        email: '',
        nim: '',
        graduation_year: '',
        active_phone_number: '+62',
        date_of_birth: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    const onChangeActivePhoneNumber = (value: string) => {
        // Ensure the prefix starts with +62
        const prefix = '+62';

        // If the input doesn't start with +62, force it
        if (!value.startsWith(prefix)) {
            value = prefix + value.replace(/[^0-9]/g, ''); // remove any non-digit characters
        }

        // Remove everything except digits after +62
        const rest = value.slice(prefix.length).replace(/\D/g, ''); // keep only digits

        const formattedValue = prefix + rest;

        setData('active_phone_number', formattedValue);
    };

    return (
        <AuthLayout title="Daftar Akun Alumni" description="Buat akun alumni untuk mengakses portal alumni Tekkom.">
            <Head title="Register" />
            <form className="flex flex-col gap-6" onSubmit={submit}>
                <div className="grid gap-6">
                    <p className='text-xl font-semibold'>Informasi Akun</p>
                    <div className="grid gap-2">
                        <Label htmlFor="name">Nama</Label>
                        <Input
                            id="name"
                            type="text"
                            required
                            autoFocus
                            tabIndex={1}
                            autoComplete="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            disabled={processing}
                            placeholder="Full name"
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            required
                            tabIndex={2}
                            autoComplete="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            disabled={processing}
                            placeholder="Email"
                        />
                        <InputError message={errors.email} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            required
                            tabIndex={3}
                            autoComplete="new-password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            disabled={processing}
                            placeholder="Password"
                        />
                        <InputError message={errors.password} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="password_confirmation">Konfirmasi password</Label>
                        <Input
                            id="password_confirmation"
                            type="password"
                            required
                            tabIndex={4}
                            autoComplete="new-password"
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            disabled={processing}
                            placeholder="Konfirmasi password"
                        />
                        <InputError message={errors.password_confirmation} />
                    </div>

                    <p className='text-xl font-semibold'>Informasi Alumni</p>
                    <div className="grid gap-2">
                        <Label htmlFor="nim">NIM</Label>
                        <Input
                            id="nim"
                            type="text"
                            required
                            tabIndex={5}
                            autoComplete="nim"
                            value={data.nim}
                            onChange={(e) => setData('nim', e.target.value)}
                            disabled={processing}
                            placeholder="NIM"
                        />
                        <InputError message={errors.nim} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="graduation_year">Tahun Lulus</Label>
                        <Select onValueChange={(value) => setData('graduation_year', value)} defaultValue={data.graduation_year}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Tahun Lulus" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="2023">2023</SelectItem>
                                <SelectItem value="2024">2024</SelectItem>
                                <SelectItem value="2025">2025</SelectItem>
                                <SelectItem value="2026">2026</SelectItem>
                            </SelectContent>
                        </Select>
                        {/* <Input
                            id="graduation_year"
                            type="text"
                            required
                            tabIndex={6}
                            autoComplete="graduation_year"
                            value={data.graduation_year}
                            onChange={(e) => setData('graduation_year', e.target.value)}
                            disabled={processing}
                            placeholder="Graduation Year"
                        /> */}
                        <InputError message={errors.graduation_year} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="active_phone_number">Nomor Telepon Aktif</Label>
                        <Input
                            id="active_phone_number"
                            type="text"
                            required
                            tabIndex={7}
                            autoComplete="active_phone_number"
                            value={data.active_phone_number}
                            onChange={(e) => onChangeActivePhoneNumber(e.target.value)}
                            disabled={processing}
                            placeholder="+6281234567890"
                        />
                        <InputError message={errors.active_phone_number} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="date_of_birth">Tanggal Lahir</Label>
                        <Input
                            id="date_of_birth"
                            type="date"
                            required
                            tabIndex={8}
                            autoComplete="date_of_birth"
                            value={data.date_of_birth}
                            onChange={(e) => setData('date_of_birth', e.target.value)}
                            disabled={processing}
                        />
                        <InputError message={errors.date_of_birth} />
                    </div>

                    <Button type="submit" className="mt-2 w-full" tabIndex={5} disabled={processing}>
                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        Buat Akun
                    </Button>
                </div>

                <div className="text-muted-foreground text-center text-sm">
                    Sudah punya akun?{' '}
                    <TextLink href={route('login')} tabIndex={6}>
                        Log in
                    </TextLink>
                </div>
            </form>
        </AuthLayout>
    );
}
