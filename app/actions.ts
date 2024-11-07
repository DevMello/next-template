'use server';

import { redirect } from 'next/navigation';
import PocketBase from 'pocketbase';
import { cookies } from 'next/headers';

const pb = new PocketBase(process.env.POCKETBASE_URL);

export async function loginOAuth(provider: string) {
    const {token, record:model} = await pb.collection('users').authWithOAuth2({provider: provider});
    const cookie = JSON.stringify({token, model});

    cookies().set('pb_auth', cookie, {
        secure: true,
        path: '/',
        sameSite: 'strict',
        httpOnly: true,
    });

    redirect('/dashboard');
}

export async function loginInstagram() {
    loginOAuth('instagram');
}

export async function loginGitHub() {
    loginOAuth('github');
}

export async function loginGoogle() {
    loginOAuth('google');
}


export async function login(formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    await pb.collection('users').authWithPassword
  
    const { token, record: model } = await pb
      .collection('users')
      .authWithPassword(email, password);
  
    const cookie = JSON.stringify({ token, model });
  
    cookies().set('pb_auth', cookie, {
      secure: true,
      path: '/',
      sameSite: 'strict',
      httpOnly: true,
    });
  
    redirect('/dashboard');
}
  
export async function logout() {
    cookies().delete('pb_auth');
    redirect('/');
}