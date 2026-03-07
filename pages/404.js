import { useEffect } from 'react';
import { Link } from '../src/router';

const quickLinks = [
  { href: '/#skills', label: 'Skills técnicas' },
  { href: '/#projects', label: 'Projetos' },
  { href: '/resume', label: 'Currículo' },
];

export default function Custom404() {
  useEffect(() => {
    document.title = '404 | Página não encontrada';
  }, []);

  return (
    <main className='relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-12'>
      <div className='absolute -left-20 top-0 h-72 w-72 rounded-full bg-violet-300/35 blur-3xl sm:h-96 sm:w-96' />
      <div className='absolute -right-20 top-24 h-72 w-72 rounded-full bg-sky-300/35 blur-3xl sm:h-96 sm:w-96' />
      <div className='absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-indigo-300/25 blur-3xl sm:h-80 sm:w-80' />

      <section className='relative z-10 w-full max-w-3xl rounded-[30px] border border-white/60 bg-white/80 p-8 text-center shadow-[0_20px_80px_-28px_rgba(86,81,229,0.55)] backdrop-blur-md sm:p-12'>
        <p className='text-xs font-semibold uppercase tracking-[0.24em] text-[#5651e5]'>Portfolio de Tecnologia</p>
        <h1 className='mt-4 text-6xl font-extrabold leading-none text-[#5651e5] sm:text-7xl'>404</h1>
        <h2 className='mt-4 text-2xl font-bold text-[#1f2937] sm:text-3xl'>Página não encontrada</h2>
        <p className='mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg'>
          O conteúdo que você tentou acessar não está disponível no momento. Enquanto isso, você pode explorar minhas
          competências técnicas, projetos e currículo. <span className='font-semibold text-gray-700'>Tente novamente mais tarde.</span>
        </p>

        <div className='mx-auto mt-7 flex max-w-xl flex-wrap items-center justify-center gap-3'>
          {quickLinks.map((link) => (
            <Link key={link.href} to={link.href} className='rounded-full border border-indigo-100 bg-indigo-50/80 px-4 py-2 text-sm font-semibold text-[#5651e5] transition hover:border-indigo-200 hover:bg-indigo-100'>
              {link.label}
            </Link>
          ))}
        </div>

        <div className='mt-8 grid gap-4 sm:grid-cols-2'>
          <Link to='/' className='inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#5651e5] to-[#709dff] px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-300/60 transition hover:scale-[1.02]'>
            Voltar para a home
          </Link>

          <button
            type='button'
            onClick={() => (typeof window !== 'undefined' ? window.location.reload() : null)}
            className='inline-flex items-center justify-center rounded-xl border border-indigo-200 bg-white px-6 py-3 font-semibold normal-case text-[#5651e5] shadow-md shadow-indigo-100/60 transition hover:bg-indigo-50'
          >
            Recarregar página
          </button>
        </div>
      </section>
    </main>
  );
}
