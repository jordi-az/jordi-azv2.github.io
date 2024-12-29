'use client';

import { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    const storedPreference = localStorage.getItem('dark-mode');
    if (storedPreference !== null) {
      setDarkMode(storedPreference === 'true');
    } else {
      setDarkMode(prefersDark);
    }
    setIsMounted(true);

    const handleMediaQueryChange = (e) => {
      setDarkMode(e.matches);
    };

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    if (isMounted) {
      if (darkMode) {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
      } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
      }
      localStorage.setItem('dark-mode', darkMode.toString());
    }
  }, [darkMode, isMounted]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if (!isMounted) return null; // Renderiza null hasta que esté montado

  const handleCopy = () => {
    const textToCopy = 'jordi-az@outlook.com';

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopied(true);
        // Oculta la notificación después de 2 segundos
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((error) => {
        console.error('Failed to copy text:', error);
      });
  };

  return (
    <>
      <header className="flex justify-center items-center mx-auto sticky bottom-0 md:top-0 w-full max-w-[720px] py-5 z-50">
        <nav className="hidden md:flex gap-1 bg-gray-900/50 backdrop-blur-md px-4 py-0.5 rounded-full text-xl items-center">
          <Link
            href="/#conoceme"
            className="py-0.5 px-4 rounded-full transition duration-300 ease-in-out hover:text-sky-300"
          >
            Conóceme
          </Link>
          <Link
            href="/#proyectos"
            className="py-0.5 px-4 rounded-full transition duration-300 ease-in-out hover:text-sky-300"
          >
            Proyectos
          </Link>
          <Link
            href="/#social"
            className="py-0.5 px-4 rounded-full transition duration-300 ease-in-out hover:text-sky-300"
          >
            Social
          </Link>
          <Link
            href="/#contacto"
            className="py-0.5 px-4 rounded-full transition duration-300 ease-in-out hover:text-sky-300"
          >
            Contacto
          </Link>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full transition duration-300 ease-in-out hover:text-sky-300"
          >
            {darkMode ? <FaMoon size={20} /> : <FaSun size={20} />}
          </button>
        </nav>
      </header>

      <main className="relative px-4 max-w-full">
        <section
          id="conoceme"
          className="w-full max-w-[720px] mx-auto pt-4 pb-10"
        >
          <article className="mt-8 mb-8">
            <Image
              src="/IMG_0368.jpeg"
              alt="Jordi Aguilera"
              width={124}
              height={124}
              className="rounded-full img-profile mb-8"
            />

            <h2 className="flex gap-2 items-center text-4xl md:text-5xl font-extrabold mb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="48"
                height="48"
                fill="currentColor"
              >
                <g>
                  <circle cx="256" cy="128" r="128" />
                  <path d="M256,298.667c-105.99,0.118-191.882,86.01-192,192C64,502.449,73.551,512,85.333,512h341.333c11.782,0,21.333-9.551,21.333-21.333C447.882,384.677,361.99,298.784,256,298.667z" />
                </g>
              </svg>
              <span>Jordi Aguilera</span>
            </h2>
            <p className="text-2xl text-balance " stroke="currentColor">
              Desarrollador de aplicaciones multiplataforma,{' '}
              <span className="text-indigo-600 dark:text-indigo-400">
                creando apps para iOS, Android y fullstack.
              </span>{' '}
              apasionado por la
              <span className="text-blue-600 dark:text-blue-400">
                tecnología y la programación
              </span>
              .
            </p>
          </article>
        </section>

        <section id="proyectos" className="w-full max-w-[720px] mx-auto py-8">
          <h2 className="flex gap-2 items-center text-4xl md:text-5xl font-extrabold mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-10 md:size-12"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                stroke-width="0"
                fill="currentColor"
              ></path>
            </svg>
            <span>Proyectos</span>
          </h2>
          <div className="mb-5 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-1lg:text-left">
            <a
              //href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                GeoTrack{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <div className="flex items-center justify-center">
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                  App de geolocalización de activos de Field Service.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/GeoTrack.png"
                  alt="Jordi Aguilera"
                  width={300}
                  height={300}
                />
                <Image
                  src="/GeoTrackAnd.png"
                  alt="Jordi Aguilera"
                  width={300}
                  height={124}
                />
              </div>
            </a>

            <a
              //href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                GeoMonitor{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <div className="flex items-center justify-center">
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                  Web de monitorio de los activos de Field Service.{' '}
                </p>
              </div>
            </a>

            <a
              //href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center justify-center">
                <Image
                  className="mb-3"
                  src="/MiStock.png"
                  alt="Jordi Aguilera"
                  width={124}
                  height={124}
                />
              </div>
              <h2 className={`mb-3 text-2xl font-semibold`}>
                MiStock{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <div className="flex items-center justify-center">
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                  App de Power Apps para gestionar inventarios.
                </p>
              </div>
            </a>
          </div>
        </section>
        <section id="skills" className="w-full max-w-[720px] mx-auto py-8">
          <h2 className="flex gap-2 items-center text-4xl md:text-5xl font-extrabold mb-8">
            <svg
              xxmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="none"
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M24,11c0-1.568-.752-3.04-2-3.979v-.021c0-1.897-1.327-3.489-3.102-3.898-.409-1.774-2.002-3.102-3.898-3.102-1.194,0-2.267,.526-3,1.357-.733-.832-1.806-1.357-3-1.357-1.896,0-3.489,1.327-3.898,3.102-1.774,.409-3.102,2.001-3.102,3.898v.021c-1.248,.939-2,2.41-2,3.979,0,.886,.235,1.737,.686,2.5-.45,.763-.686,1.614-.686,2.5,0,1.686,.858,3.244,2.267,4.166,.719,2.278,2.812,3.834,5.233,3.834,1.858,0,3.504-.926,4.5-2.342,.996,1.415,2.642,2.342,4.5,2.342,2.422,0,4.515-1.556,5.233-3.834,1.408-.922,2.267-2.48,2.267-4.166,0-.886-.235-1.737-.686-2.5,.45-.763,.686-1.614,.686-2.5ZM7.5,22c-1.634,0-3.033-1.115-3.401-2.712-.065-.281-.248-.52-.502-.656-.985-.528-1.597-1.536-1.597-2.631,0-.675,.234-1.322,.679-1.872,.296-.367,.296-.89,0-1.257-.444-.549-.679-1.196-.679-1.872,0-1.07,.591-2.067,1.543-2.603,.37-.208,.568-.627,.494-1.045-.02-.115-.037-.231-.037-.352,0-1.103,.897-2,2-2,.553,0,1-.448,1-1,0-1.103,.897-2,2-2s2,.897,2,2v4h-2.268c-.346-.598-.992-1-1.732-1-1.105,0-2,.895-2,2s.895,2,2,2c.74,0,1.386-.402,1.732-1h2.268v5h-2.268c-.346-.598-.992-1-1.732-1-1.105,0-2,.895-2,2s.895,2,2,2c.74,0,1.386-.402,1.732-1h2.268v1.5c0,1.93-1.57,3.5-3.5,3.5Zm13.821-7.872c.444,.549,.679,1.196,.679,1.872,0,1.096-.611,2.104-1.597,2.631-.254,.136-.437,.375-.502,.656-.368,1.597-1.768,2.712-3.401,2.712-1.93,0-3.5-1.57-3.5-3.5v-4.5h2c1.654,0,3-1.346,3-3v-.268c.598-.346,1-.992,1-1.732,0-1.105-.895-2-2-2s-2,.895-2,2c0,.74,.402,1.386,1,1.732v.268c0,.551-.448,1-1,1h-2V4c0-1.103,.897-2,2-2s2,.897,2,2c0,.552,.447,1,1,1,1.103,0,2,.897,2,2,0,.121-.018,.237-.037,.352-.074,.418,.124,.837,.494,1.045,.952,.535,1.543,1.533,1.543,2.603,0,.675-.234,1.322-.679,1.872-.296,.367-.296,.89,0,1.257Z" />
            </svg>
            <span>Skills</span>
          </h2>
          <div className="mb-5 grid grid-cols-4 lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
            <a
              className="group flex flex-col lg:flex-row items-center gap-4 rounded-lg border border-transparent px-4 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 19"
                  width="48"
                  height="48"
                >
                  <defs>
                    <filter
                      id="Adobe_OpacityMaskFilter"
                      filterUnits="userSpaceOnUse"
                      x="2.1"
                      y="1.1"
                      width="15.5"
                      height="16.2"
                    >
                      <feColorMatrix
                        type="matrix"
                        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"
                      />
                    </filter>
                    <mask
                      maskUnits="userSpaceOnUse"
                      x="2.1"
                      y="1.1"
                      width="15.5"
                      height="16.2"
                      id="mask0"
                    >
                      <path
                        fill="#FFFFFF"
                        d="M7.9,1.1h7c2,0,3.2,2,2.4,3.8l0.1-0.3L15,9.5c0,0,0,0,0,0l-0.4,0.8L15,9.6c-0.4,0.9-1.4,1.5-2.4,1.5H8.4l-3,6
        c-0.2,0.5-0.9,0.5-1.1,0l-2.1-4.2c-0.2-0.4-0.2-0.8,0-1.1l2.3-4.6c0.2-0.4,0.7-0.7,1.1-0.7h8.8C14,6,13.3,5.7,12.6,5.7H6.2
        c-0.5,0-0.8-0.5-0.6-0.9l1.7-3.3C7.5,1.2,7.7,1.1,7.9,1.1z"
                      />
                    </mask>
                    <linearGradient
                      id="SVGID_1_"
                      gradientUnits="userSpaceOnUse"
                      x1="4.9354"
                      y1="9.4639"
                      x2="6.7063"
                      y2="2.7347"
                      gradientTransform="matrix(1 0 0 -1 0 20)"
                    >
                      <stop offset="0" style={{ stopColor: '#159455' }} />
                      <stop offset="1" style={{ stopColor: '#3FBDA9' }} />
                    </linearGradient>
                    <linearGradient
                      id="SVGID_2_"
                      gradientUnits="userSpaceOnUse"
                      x1="5.9391"
                      y1="18.3394"
                      x2="16.2129"
                      y2="13.7717"
                      gradientTransform="matrix(1 0 0 -1 0 20)"
                    >
                      <stop offset="0" style={{ stopColor: '#23A794' }} />
                      <stop offset="0.5684" style={{ stopColor: '#007A84' }} />
                      <stop offset="1" style={{ stopColor: '#005158' }} />
                    </linearGradient>
                    <linearGradient
                      id="SVGID_3_"
                      gradientUnits="userSpaceOnUse"
                      x1="13.1727"
                      y1="11.6202"
                      x2="11.3134"
                      y2="16.49"
                      gradientTransform="matrix(1 0 0 -1 0 20)"
                    >
                      <stop offset="0" style={{ stopColor: '#004A8B' }} />
                      <stop
                        offset="0.4056"
                        style={{ stopColor: '#105DA8', stopOpacity: 0.5002 }}
                      />
                      <stop
                        offset="1"
                        style={{ stopColor: '#2170C6', stopOpacity: 0 }}
                      />
                    </linearGradient>
                    <linearGradient
                      id="SVGID_4_"
                      gradientUnits="userSpaceOnUse"
                      x1="5.1362"
                      y1="14.1387"
                      x2="14.433"
                      y2="9.5345"
                      gradientTransform="matrix(1 0 0 -1 0 20)"
                    >
                      <stop offset="0" style={{ stopColor: '#7FD9A2' }} />
                      <stop offset="0.1961" style={{ stopColor: '#47BF79' }} />
                      <stop offset="0.7139" style={{ stopColor: '#009280' }} />
                      <stop offset="1" style={{ stopColor: '#007A84' }} />
                    </linearGradient>
                    <linearGradient
                      id="SVGID_5_"
                      gradientUnits="userSpaceOnUse"
                      x1="5.0676"
                      y1="13.9756"
                      x2="7.1926"
                      y2="12.9131"
                      gradientTransform="matrix(1 0 0 -1 0 20)"
                    >
                      <stop
                        offset="0"
                        style={{ stopColor: '#A8E47C', stopOpacity: 0.86 }}
                      />
                      <stop
                        offset="0.3675"
                        style={{ stopColor: '#87D152', stopOpacity: 0.2 }}
                      />
                      <stop
                        offset="1"
                        style={{ stopColor: '#58BE5A', stopOpacity: 0 }}
                      />
                    </linearGradient>
                  </defs>
                  <g mask="url(#mask0)">
                    <path
                      fill="url(#SVGID_1_)"
                      d="M3.3,11h5.1l-3,6c-0.2,0.5-0.9,0.5-1.1,0l-2.1-4.2C1.8,12,2.4,11,3.3,11z"
                    />
                    <path
                      fill="url(#SVGID_2_)"
                      d="M7.9,1.1h7c2,0,3.3,2.1,2.4,3.8L15,9.5c0,0,0,0,0,0l-0.4,0.8L15,9.5c0.8-1.8-0.4-3.8-2.4-3.8H6.2c-0.5,0-0.8-0.5-0.6-0.9l1.7-3.3C7.5,1.2,7.7,1.1,7.9,1.1z"
                    />
                    <path
                      fill="url(#SVGID_3_)"
                      d="M7.9,1.1h7c2,0,3.3,2.1,2.4,3.8L15,9.5c0,0,0,0,0,0L14.8,10L15,9.5c0.9-1.8-0.4-3.8-2.4-3.8H6.2c-0.5,0-0.8-0.5-0.6-0.9l1.7-3.3C7.5,1.2,7.7,1.1,7.9,1.1z"
                    />
                    <g>
                      <path
                        fillOpacity="0.24"
                        d="M12.6,11.1H3.3c-0.5,0-0.9,0.3-1.1,0.7l2.3-4.6c0.2-0.4,0.7-0.7,1.1-0.7h9.3c1,0,1.9-0.6,2.4-1.5l0.2-0.3L15,9.6C14.5,10.5,13.6,11.1,12.6,11.1z"
                      />
                    </g>
                    <g>
                      <path
                        fillOpacity="0.32"
                        d="M12.6,11.4H3.3c-0.5,0-0.9,0.3-1.1,0.7l2.3-4.6C4.7,7,5.2,6.8,5.6,6.8h9.3c1,0,1.9-0.6,2.4-1.5L17.4,5L15,9.9C14.5,10.8,13.6,11.4,12.6,11.4z"
                      />
                    </g>
                    <path
                      fill="url(#SVGID_4_)"
                      d="M12.6,11H3.3c-0.5,0-0.9,0.3-1.1,0.7l2.3-4.6c0.2-0.4,0.7-0.7,1.1-0.7h9.3c1,0,1.9-0.6,2.4-1.5l0.2-0.3L15,9.6C14.5,10.5,13.6,11,12.6,11z"
                    />
                    <path
                      opacity="0.7"
                      fill="url(#SVGID_5_)"
                      d="M12.6,11H3.4c-0.5,0-0.9,0.3-1.1,0.7l2.3-4.6c0.2-0.4,0.7-0.7,1.1-0.7H15c1,0,1.9-0.5,2.3-1.4L15,9.6C14.5,10.5,13.6,11,12.6,11z"
                    />
                  </g>
                </svg>
              </div>

              <h2 className="text-1xl font-semibold text-center lg:text-left">
                Power Platform
              </h2>
            </a>

            <a
              className="group flex flex-col lg:flex-row items-center gap-4 rounded-lg border border-transparent px-4 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 19"
                  width="48"
                  height="48"
                >
                  <defs>
                    <radialGradient
                      id="a"
                      cx="22.432"
                      cy="3.493"
                      r="21.679"
                      gradientTransform="matrix(1.0856 0 0 1.0856 -4.4842 -2.9511)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#e44857" offset=".003" />
                      <stop stopColor="#c711e1" offset=".469" />
                      <stop stopColor="#7f52ff" offset="1" />
                    </radialGradient>
                  </defs>
                  <path
                    d="m20.554 20.543h-20.554v-20.543h20.554l-10.489 10.119z"
                    fill="url(#a)"
                    strokeWidth="1.0858"
                  />
                </svg>
              </div>
              <h2 className="text-1xl font-semibold text-center lg:text-left">
                Kotlin{' '}
              </h2>
            </a>

            <a
              className="group flex flex-col lg:flex-row items-center gap-4 rounded-lg border border-transparent px-4 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="48"
                  height="48"
                  viewBox="-252 343.9 106.1 106.1"
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      fill="#F05138"
                      d="M-145.9,373.3c0-1.1,0-2.1,0-3.2c-0.1-2.3-0.2-4.7-0.6-7c-0.4-2.3-1.1-4.5-2.2-6.6c-1.1-2.1-2.4-4-4.1-5.6c-1.7-1.7-3.6-3-5.6-4.1c-2.1-1.1-4.3-1.8-6.6-2.2c-2.3-0.4-4.6-0.6-7-0.6c-1.1,0-2.1,0-3.2,0c-1.3,0-2.5,0-3.8,0h-28.1h-11.6c-1.3,0-2.5,0-3.8,0c-1.1,0-2.1,0-3.2,0c-0.6,0-1.2,0-1.7,0.1c-1.7,0.1-3.5,0.2-5.2,0.5c-1.7,0.3-3.4,0.8-5,1.4c-0.5,0.2-1.1,0.5-1.6,0.7c-1.6,0.8-3,1.8-4.4,2.9c-0.4,0.4-0.9,0.8-1.3,1.2c-1.7,1.7-3,3.6-4.1,5.6c-1.1,2.1-1.8,4.3-2.2,6.6c-0.4,2.3-0.5,4.6-0.6,7c0,1.1,0,2.1,0,3.2c0,1.3,0,2.5,0,3.8v17.3v22.4c0,1.3,0,2.5,0,3.8c0,1.1,0,2.1,0,3.2c0.1,2.3,0.2,4.7,0.6,7c0.4,2.3,1.1,4.5,2.2,6.6c1.1,2.1,2.4,4,4.1,5.6c1.7,1.7,3.6,3,5.6,4.1c2.1,1.1,4.3,1.8,6.6,2.2c2.3,0.4,4.6,0.6,7,0.6c1.1,0,2.1,0,3.2,0c1.3,0,2.5,0,3.8,0h39.7c1.3,0,2.5,0,3.8,0c1.1,0,2.1,0,3.2,0c2.3-0.1,4.7-0.2,7-0.6c2.3-0.4,4.5-1.1,6.6-2.2c2.1-1.1,4-2.4,5.6-4.1c1.7-1.7,3-3.6,4.1-5.6c1.1-2.1,1.8-4.3,2.2-6.6c0.4-2.3,0.6-4.6,0.6-7c0-1.1,0-2.1,0-3.2c0-1.3,0-2.5,0-3.8v-39.7C-145.9,375.8-145.9,374.6-145.9,373.3z"
                    />
                    <path
                      fill="#FFFFFF"
                      d="M-168,409.4c0.1-0.4,0.2-0.8,0.3-1.2c4.4-17.5-6.3-38.3-24.5-49.2c8,10.8,11.5,23.9,8.4,35.3c-0.3,1-0.6,2-1,3c-0.4-0.3-0.9-0.6-1.6-0.9c0,0-18.1-11.2-37.7-30.9c-0.5-0.5,10.5,15.7,22.9,28.8c-5.9-3.3-22.2-15.2-32.6-24.6c1.3,2.1,2.8,4.2,4.4,6.1c8.6,11,19.9,24.5,33.4,34.9c-9.5,5.8-22.9,6.3-36.2,0c-3.3-1.5-6.4-3.4-9.3-5.5c5.6,9,14.3,16.8,24.9,21.4c12.6,5.4,25.2,5.1,34.5,0.1l0,0c0,0,0.1,0,0.1-0.1c0.4-0.2,0.8-0.5,1.2-0.7c4.5-2.3,13.3-4.6,18.1,4.6C-161.3,432.6-158.8,420.6-168,409.4C-168,409.4-168,409.4-168,409.4z"
                    />
                  </g>
                </svg>
              </div>
              <h2 className="text-1xl font-semibold text-center lg:text-left">
                Swift
              </h2>
            </a>

            <a
              className="group flex flex-col lg:flex-row items-center gap-4 rounded-lg border border-transparent px-4 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 32 32"
                >
                  <path
                    d="M11.622 24.74s-1.23.748.855.962c2.51.32 3.847.267 6.625-.267a10.02 10.02 0 0 0 1.763.855c-6.25 2.672-14.16-.16-9.244-1.55zm-.8-3.473s-1.336 1.015.748 1.23c2.725.267 4.862.32 8.55-.427a3.26 3.26 0 0 0 1.282.801c-7.534 2.244-15.976.214-10.58-1.603zm14.747 6.09s.908.748-1.015 1.336c-3.58 1.07-15.014 1.39-18.22 0-1.122-.48 1.015-1.175 1.7-1.282.695-.16 1.07-.16 1.07-.16-1.23-.855-8.175 1.763-3.526 2.51 12.77 2.084 23.296-.908 19.983-2.404zM12.2 17.633s-5.824 1.39-2.084 1.87c1.603.214 4.755.16 7.694-.053 2.404-.214 4.81-.64 4.81-.64s-.855.374-1.443.748c-5.93 1.55-17.312.855-14.052-.748 2.778-1.336 5.076-1.175 5.076-1.175zm10.42 5.824c5.984-3.1 3.206-6.09 1.282-5.717-.48.107-.695.214-.695.214s.16-.32.534-.427c3.794-1.336 6.786 4.007-1.23 6.09 0 0 .053-.053.107-.16zm-9.83 8.442c5.77.374 14.587-.214 14.8-2.94 0 0-.427 1.07-4.755 1.87-4.916.908-11.007.8-14.587.214 0 0 .748.64 4.542.855z"
                    fill="#4e7896"
                  />
                  <path
                    d="M18.996.001s3.313 3.366-3.152 8.442c-5.183 4.114-1.175 6.465 0 9.137-3.046-2.725-5.236-5.13-3.74-7.373C14.294 6.893 20.332 5.3 18.996.001zm-1.7 15.335c1.55 1.763-.427 3.366-.427 3.366s3.954-2.03 2.137-4.542c-1.656-2.404-2.94-3.58 4.007-7.587 0 0-10.953 2.725-5.717 8.763z"
                    fill="#f58219"
                  />
                </svg>
              </div>
              <h2 className="text-1xl font-semibold text-center lg:text-left">
                Java
              </h2>
            </a>

            <a
              className="group flex flex-col lg:flex-row items-center gap-4 rounded-lg border border-transparent px-4 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 1052 1052"
                >
                  <path fill="#f0db4f" d="M0 0h1052v1052H0z" />
                  <path
                    d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z"
                    fill="#323330"
                  />
                </svg>
              </div>
              <h2 className="text-1xl font-semibold text-center lg:text-left">
                JavaScript
              </h2>
            </a>
          </div>

          <div className="mb-5 grid grid-cols-4 lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
            <a
              className="group flex flex-col lg:flex-row items-center gap-4 rounded-lg border border-transparent px-4 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 32 32"
                  preserveAspectRatio="xMidYMid"
                  fill="#8cc84b"
                >
                  <path d="M14.656.427c.8-.453 1.82-.455 2.6 0L29.2 7.16c.747.42 1.247 1.253 1.24 2.114v13.5c.005.897-.544 1.748-1.332 2.16l-11.88 6.702a2.6 2.6 0 0 1-2.639-.073l-3.565-2.06c-.243-.145-.516-.26-.688-.495.152-.204.422-.23.642-.32.496-.158.95-.4 1.406-.656.115-.08.256-.05.366.022l3.04 1.758c.217.125.437-.04.623-.145l11.665-6.583c.144-.07.224-.222.212-.38V9.334c.016-.18-.087-.344-.25-.417L16.19 2.244a.41.41 0 0 0-.465-.001L3.892 8.93c-.16.073-.27.235-.25.415v13.37c-.014.158.07.307.215.375l3.162 1.785c.594.32 1.323.5 1.977.265a1.5 1.5 0 0 0 .971-1.409l.003-13.29c-.014-.197.172-.36.363-.34h1.52c.2-.005.357.207.33.405L12.18 23.88c.001 1.188-.487 2.48-1.586 3.063-1.354.7-3.028.553-4.366-.12l-3.4-1.88c-.8-.4-1.337-1.264-1.332-2.16v-13.5a2.46 2.46 0 0 1 1.282-2.141L14.656.427zM18.1 9.785c1.727-.1 3.576-.066 5.13.785 1.203.652 1.87 2.02 1.892 3.358-.034.18-.222.28-.394.267-.5-.001-1.002.007-1.504-.003-.213.008-.336-.188-.363-.376-.144-.64-.493-1.273-1.095-1.582-.924-.463-1.996-.44-3.004-.43-.736.04-1.527.103-2.15.535-.48.328-.624 1-.453 1.522.16.383.603.506.964.62 2.082.544 4.287.5 6.33 1.207.845.292 1.672.86 1.962 1.745.378 1.186.213 2.604-.63 3.556-.684.784-1.68 1.2-2.675 1.442-1.323.295-2.695.302-4.038.17-1.263-.144-2.577-.476-3.552-1.336-.834-.724-1.24-1.852-1.2-2.94.01-.184.193-.312.37-.297h1.5c.202-.014.35.16.36.35.093.6.322 1.25.854 1.6 1.026.662 2.313.616 3.487.635.973-.043 2.065-.056 2.86-.7.42-.367.543-.98.43-1.508-.123-.446-.6-.653-1-.8-2.055-.65-4.285-.414-6.32-1.15-.826-.292-1.625-.844-1.942-1.693-.443-1.2-.24-2.687.693-3.607.9-.915 2.22-1.268 3.47-1.394z" />
                </svg>
              </div>
              <h2 className="text-1xl font-semibold text-center lg:text-left">
                node.js
              </h2>
            </a>

            <a
              className="group flex flex-col lg:flex-row items-center gap-4 rounded-lg border border-transparent px-4 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  backgroundColor: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg
                  height="40"
                  viewBox="8.738 -.036 14.517 32.038"
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m15.9.087.854 1.604c.192.296.4.558.645.802a22.406 22.406 0 0 1 2.004 2.266c1.447 1.9 2.423 4.01 3.12 6.292.418 1.394.645 2.824.662 4.27.07 4.323-1.412 8.035-4.4 11.12a12.7 12.7 0 0 1 -1.57 1.342c-.296 0-.436-.227-.558-.436a3.589 3.589 0 0 1 -.436-1.255c-.105-.523-.174-1.046-.14-1.586v-.244c-.024-.052-.285-24.052-.181-24.175z"
                    fill="#599636"
                  />
                  <path
                    d="m15.9.034c-.035-.07-.07-.017-.105.017.017.35-.105.662-.296.96-.21.296-.488.523-.767.767-1.55 1.342-2.77 2.963-3.747 4.776-1.3 2.44-1.97 5.055-2.16 7.808-.087.993.314 4.497.627 5.508.854 2.684 2.388 4.933 4.375 6.885.488.47 1.01.906 1.55 1.325.157 0 .174-.14.21-.244a4.78 4.78 0 0 0 .157-.68l.35-2.614z"
                    fill="#6cac48"
                  />
                  <path
                    d="m16.754 28.845c.035-.4.227-.732.436-1.063-.21-.087-.366-.26-.488-.453a3.235 3.235 0 0 1 -.26-.575c-.244-.732-.296-1.5-.366-2.248v-.453c-.087.07-.105.662-.105.75a17.37 17.37 0 0 1 -.314 2.353c-.052.314-.087.627-.28.906 0 .035 0 .07.017.122.314.924.4 1.865.453 2.824v.35c0 .418-.017.33.33.47.14.052.296.07.436.174.105 0 .122-.087.122-.157l-.052-.575v-1.604c-.017-.28.035-.558.07-.82z"
                    fill="#c2bfbf"
                  />
                </svg>
              </div>
              <h2 className="text-1xl font-semibold text-center lg:text-left">
                MongoDB
              </h2>
            </a>

            <a
              className="group flex flex-col lg:flex-row items-center gap-4 rounded-lg border border-transparent px-4 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0.5 0.5 999 699.242"
                >
                  <path
                    fill="#00A1E0"
                    d="M416.224 76.763c32.219-33.57 77.074-54.391 126.682-54.391 65.946 0 123.48 36.772 154.12 91.361 26.626-11.896 56.098-18.514 87.106-18.514 118.94 0 215.368 97.268 215.368 217.247 0 119.993-96.428 217.261-215.368 217.261a213.735 213.735 0 0 1-42.422-4.227c-26.981 48.128-78.397 80.646-137.412 80.646-24.705 0-48.072-5.706-68.877-15.853-27.352 64.337-91.077 109.448-165.348 109.448-77.344 0-143.261-48.939-168.563-117.574-11.057 2.348-22.513 3.572-34.268 3.572C75.155 585.74.5 510.317.5 417.262c0-62.359 33.542-116.807 83.378-145.937-10.26-23.608-15.967-49.665-15.967-77.06C67.911 87.25 154.79.5 261.948.5c62.914 0 118.827 29.913 154.276 76.263"
                  />
                  <path
                    fill="#FFF"
                    d="M145.196 363.11c-.626 1.637.228 1.979.427 2.263 1.878 1.366 3.786 2.349 5.707 3.444 10.189 5.407 19.81 6.986 29.871 6.986 20.492 0 33.214-10.9 33.214-28.447v-.341c0-16.224-14.358-22.115-27.835-26.37l-1.75-.569c-10.161-3.302-18.927-6.147-18.927-12.836v-.355c0-5.721 5.123-9.934 13.064-9.934 8.823 0 19.297 2.932 26.042 6.66 0 0 1.978 1.281 2.704-.64.398-1.025 3.814-10.218 4.17-11.214.384-1.082-.299-1.879-.996-2.306-7.699-4.682-18.344-7.884-29.358-7.884l-2.049.014c-18.756 0-31.848 11.328-31.848 27.565v.342c0 17.119 14.444 22.669 27.978 26.54l2.177.669c9.862 3.031 18.358 5.635 18.358 12.58v.342c0 6.347-5.521 11.071-14.43 11.071-3.458 0-14.487-.071-26.398-7.6-1.438-.84-2.277-1.451-3.387-2.12-.583-.37-2.049-1.011-2.689.925l-4.045 11.215zM445.194 363.11c-.626 1.637.228 1.979.427 2.263 1.878 1.366 3.786 2.349 5.706 3.444 10.189 5.407 19.811 6.986 29.871 6.986 20.492 0 33.215-10.9 33.215-28.447v-.341c0-16.224-14.359-22.115-27.836-26.37l-1.75-.569c-10.161-3.302-18.928-6.147-18.928-12.836v-.355c0-5.721 5.123-9.934 13.064-9.934 8.823 0 19.297 2.932 26.043 6.66 0 0 1.978 1.281 2.703-.64.398-1.025 3.814-10.218 4.17-11.214.385-1.082-.299-1.879-.996-2.306-7.699-4.682-18.344-7.884-29.358-7.884l-2.05.014c-18.756 0-31.848 11.328-31.848 27.565v.342c0 17.119 14.444 22.669 27.978 26.54l2.177.669c9.862 3.031 18.373 5.635 18.373 12.58v.342c0 6.347-5.536 11.071-14.445 11.071-3.457 0-14.486-.071-26.397-7.6-1.438-.84-2.291-1.423-3.372-2.12-.371-.242-2.107-.911-2.705.925l-4.042 11.215zM649.995 328.74c0 9.919-1.85 17.731-5.493 23.253-3.601 5.465-9.051 8.126-16.649 8.126-7.613 0-13.035-2.647-16.579-8.126-3.587-5.507-5.407-13.334-5.407-23.253 0-9.904 1.82-17.703 5.407-23.168 3.544-5.407 8.966-8.04 16.579-8.04 7.599 0 13.049 2.633 16.664 8.04 3.629 5.464 5.478 13.263 5.478 23.168m17.106-18.386c-1.68-5.679-4.298-10.688-7.784-14.857-3.487-4.184-7.898-7.542-13.136-9.99-5.223-2.433-11.398-3.671-18.328-3.671-6.945 0-13.121 1.238-18.344 3.671-5.237 2.448-9.648 5.807-13.149 9.99-3.472 4.184-6.091 9.193-7.784 14.857-1.665 5.649-2.505 11.825-2.505 18.386s.84 12.751 2.505 18.386c1.693 5.664 4.298 10.674 7.799 14.857 3.486 4.184 7.912 7.528 13.135 9.904 5.236 2.377 11.398 3.586 18.344 3.586 6.93 0 13.092-1.209 18.328-3.586 5.223-2.376 9.648-5.721 13.136-9.904 3.486-4.17 6.104-9.179 7.784-14.857 1.68-5.649 2.519-11.84 2.519-18.386s-.841-12.737-2.52-18.386M807.568 357.47c-.569-1.665-2.177-1.039-2.177-1.039-2.49.954-5.138 1.836-7.955 2.277-2.861.44-6.006.669-9.379.669-8.281 0-14.856-2.462-19.566-7.329-4.725-4.867-7.372-12.736-7.344-23.381.029-9.691 2.362-16.978 6.561-22.527 4.17-5.521 10.517-8.354 18.984-8.354 7.059 0 12.438.811 18.072 2.59 0 0 1.352.583 1.992-1.181 1.494-4.156 2.604-7.13 4.198-11.698.456-1.295-.654-1.85-1.053-2.007-2.22-.868-7.457-2.276-11.413-2.874-3.7-.569-8.026-.868-12.836-.868-7.188 0-13.591 1.224-19.069 3.672-5.465 2.433-10.104 5.791-13.775 9.976-3.672 4.184-6.461 9.192-8.325 14.856-1.85 5.649-2.789 11.854-2.789 18.415 0 14.188 3.828 25.657 11.385 34.054 7.57 8.425 18.941 12.708 33.77 12.708 8.766 0 17.76-1.778 24.221-4.326 0 0 1.238-.598.697-2.034l-4.199-11.599zM837.497 319.238c.811-5.507 2.334-10.09 4.682-13.661 3.544-5.422 8.951-8.396 16.551-8.396s12.623 2.988 16.223 8.396c2.391 3.571 3.43 8.354 3.843 13.661h-41.299zm57.592-12.111c-1.451-5.479-5.052-11.015-7.414-13.548-3.729-4.013-7.371-6.816-10.986-8.382-4.725-2.021-10.389-3.358-16.593-3.358-7.229 0-13.79 1.21-19.112 3.714-5.336 2.505-9.818 5.921-13.334 10.176-3.516 4.24-6.162 9.292-7.842 15.027-1.693 5.707-2.547 11.926-2.547 18.485 0 6.675.883 12.894 2.633 18.486 1.765 5.636 4.582 10.602 8.396 14.714 3.799 4.142 8.695 7.387 14.558 9.648 5.821 2.249 12.894 3.416 21.019 3.401 16.722-.057 25.53-3.785 29.159-5.792.641-.355 1.253-.981.483-2.774l-3.785-10.603c-.568-1.579-2.177-.996-2.177-.996-4.142 1.537-10.032 4.298-23.766 4.27-8.979-.014-15.64-2.661-19.81-6.803-4.283-4.24-6.375-10.474-6.745-19.268l57.905.057s1.522-.028 1.68-1.509c.057-.624 1.993-11.895-1.722-24.945M373.762 319.238c.825-5.507 2.334-10.09 4.682-13.661 3.543-5.422 8.951-8.396 16.55-8.396s12.623 2.988 16.237 8.396c2.376 3.571 3.415 8.354 3.828 13.661h-41.297zm57.577-12.111c-1.451-5.479-5.037-11.015-7.399-13.548-3.729-4.013-7.372-6.816-10.986-8.382-4.725-2.021-10.388-3.358-16.593-3.358-7.215 0-13.79 1.21-19.112 3.714-5.336 2.505-9.819 5.921-13.334 10.176-3.515 4.24-6.162 9.292-7.841 15.027-1.679 5.707-2.547 11.926-2.547 18.485 0 6.675.882 12.894 2.633 18.486 1.765 5.636 4.583 10.602 8.396 14.714 3.8 4.142 8.695 7.387 14.558 9.648 5.821 2.249 12.893 3.416 21.019 3.401 16.721-.057 25.53-3.785 29.159-5.792.641-.355 1.252-.981.484-2.774l-3.771-10.603c-.584-1.579-2.191-.996-2.191-.996-4.141 1.537-10.019 4.298-23.78 4.27-8.965-.014-15.625-2.661-19.795-6.803-4.284-4.24-6.375-10.474-6.746-19.268l57.905.057s1.522-.028 1.679-1.509c.055-.624 1.99-11.895-1.738-24.945M248.601 357.153c-2.263-1.808-2.576-2.263-3.344-3.43-1.139-1.779-1.722-4.312-1.722-7.528 0-5.095 1.679-8.752 5.166-11.214-.042.015 4.981-4.34 16.792-4.184 8.296.114 15.71 1.338 15.71 1.338v26.327h.014s-7.357 1.579-15.639 2.077c-11.783.712-17.02-3.4-16.977-3.386m23.039-40.686c-2.348-.171-5.394-.271-9.037-.271-4.966 0-9.762.626-14.259 1.836-4.525 1.209-8.595 3.103-12.096 5.606a27.927 27.927 0 0 0-8.396 9.549c-2.049 3.814-3.088 8.311-3.088 13.349 0 5.123.882 9.577 2.647 13.221 1.765 3.657 4.312 6.702 7.556 9.051 3.216 2.348 7.187 4.069 11.797 5.108 4.54 1.039 9.691 1.565 15.327 1.565 5.934 0 11.854-.483 17.589-1.466 5.678-.968 12.651-2.377 14.586-2.817a146.25 146.25 0 0 0 4.056-1.039c1.438-.355 1.324-1.893 1.324-1.893l-.029-52.952c0-11.613-3.102-20.223-9.207-25.559-6.077-5.322-15.028-8.013-26.597-8.013-4.341 0-11.328.599-15.512 1.438 0 0-12.651 2.448-17.86 6.518 0 0-1.138.712-.512 2.306l4.099 11.015c.512 1.423 1.893.939 1.893.939s.441-.171.954-.47c11.143-6.062 25.231-5.877 25.231-5.877 6.262 0 11.072 1.252 14.316 3.742 3.159 2.419 4.767 6.076 4.767 13.789v2.448c-4.981-.711-9.549-1.123-9.549-1.123M738.669 286.631c.44-1.31-.484-1.936-.869-2.078-.981-.384-5.905-1.423-9.705-1.665-7.271-.441-11.312.783-14.928 2.405-3.586 1.622-7.57 4.24-9.791 7.215v-7.044c0-.982-.697-1.765-1.665-1.765h-14.843c-.967 0-1.664.782-1.664 1.765v86.366c0 .968.797 1.765 1.764 1.765h15.213a1.76 1.76 0 0 0 1.75-1.765v-43.147c0-5.792.641-11.569 1.922-15.198 1.252-3.587 2.96-6.461 5.066-8.525 2.12-2.049 4.525-3.486 7.158-4.297 2.689-.826 5.663-1.096 7.77-1.096 3.031 0 6.361.782 6.361.782 1.109.128 1.736-.555 2.105-1.565.997-2.647 3.815-10.574 4.356-12.153"
                  />
                  <path
                    fill="#FFF"
                    d="M595.874 246.603c-1.85-.569-3.529-.954-5.721-1.366-2.221-.398-4.867-.598-7.869-.598-10.475 0-18.729 2.96-24.52 8.794-5.764 5.807-9.678 14.644-11.642 26.271l-.712 3.913h-13.148s-1.594-.057-1.936 1.68l-2.148 12.053c-.157 1.139.342 1.864 1.878 1.864h12.794l-12.979 72.463c-1.011 5.835-2.178 10.631-3.473 14.273-1.267 3.587-2.504 6.276-4.041 8.24-1.48 1.879-2.875 3.273-5.295 4.084-1.992.669-4.297.982-6.816.982-1.395 0-3.258-.229-4.639-.513-1.366-.271-2.092-.569-3.131-1.011 0 0-1.494-.568-2.092.926-.47 1.238-3.885 10.615-4.298 11.769-.398 1.152.171 2.049.896 2.319 1.708.598 2.974.996 5.294 1.551 3.217.755 5.934.797 8.481.797 5.322 0 10.189-.754 14.217-2.205 4.042-1.466 7.57-4.014 10.701-7.457 3.373-3.729 5.493-7.628 7.515-12.964 2.006-5.266 3.729-11.812 5.094-19.439l13.05-73.815h19.069s1.607.057 1.936-1.693l2.162-12.039c.143-1.152-.341-1.864-1.893-1.864h-18.514c.1-.412.939-6.931 3.06-13.063.911-2.604 2.618-4.725 4.056-6.177 1.424-1.423 3.06-2.433 4.854-3.017 1.835-.598 3.928-.882 6.219-.882 1.736 0 3.457.199 4.752.469 1.793.385 2.49.584 2.961.727 1.893.569 2.148.014 2.519-.896l4.426-12.153c.455-1.312-.669-1.867-1.067-2.023M337.194 371.834c0 .968-.697 1.751-1.665 1.751h-15.355c-.968 0-1.651-.783-1.651-1.751v-123.58c0-.967.683-1.75 1.651-1.75h15.355c.968 0 1.665.783 1.665 1.75v123.58z"
                  />
                </svg>
              </div>
              <h2 className="text-1xl font-semibold text-center lg:text-left">
                Salesforce{' '}
              </h2>
            </a>

            <a
              className="group flex flex-col lg:flex-row items-center gap-4 rounded-lg border border-transparent px-4 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <svg
                  height="48"
                  preserveAspectRatio="xMidYMid"
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -30.632 255.324 285.956"
                >
                  <defs>
                    <linearGradient id="a" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset=".18" stop-color="#0052cc" />
                      <stop offset="1" stop-color="#2684ff" />
                    </linearGradient>
                    <linearGradient
                      id="b"
                      xlinkHref="#a"
                      x1="98.031%"
                      y1=".161%"
                      x2="58.888%"
                      y2="40.766%"
                    />
                    <linearGradient
                      id="c"
                      xlinkHref="#a"
                      x1="100.665%"
                      y1=".455%"
                      x2="55.402%"
                      y2="44.727%"
                    />
                  </defs>
                  <path
                    d="M244.658 0H121.707a55.502 55.502 0 0 0 55.502 55.502h22.649V77.37c.02 30.625 24.841 55.447 55.466 55.467V10.666C255.324 4.777 250.55 0 244.658 0z"
                    fill="#2684ff"
                  />
                  <path
                    d="M183.822 61.262H60.872c.019 30.625 24.84 55.447 55.466 55.467h22.649v21.938c.039 30.625 24.877 55.43 55.502 55.43V71.93c0-5.891-4.776-10.667-10.667-10.667z"
                    fill="url(#b)"
                  />
                  <path
                    d="M122.951 122.489H0c0 30.653 24.85 55.502 55.502 55.502h22.72v21.867c.02 30.597 24.798 55.408 55.396 55.466V133.156c0-5.891-4.776-10.667-10.667-10.667z"
                    fill="url(#c)"
                  />
                </svg>
              </div>
              <h2 className="text-1xl font-semibold text-center lg:text-left">
                Jira
              </h2>
            </a>
          </div>
        </section>
      </main>

      <footer
        id="contacto"
        className="w-full max-w-[720px] mx-auto pb-8 px-4 z-20 md:px-0"
      >
        <div className="mb-8">
          <h2 className="flex gap-2 items-center text-4xl md:text-5xl font-extrabold mb-8">
            {' '}
            <svg
              className="size-10 md:size-12"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z"
                stroke-width="0"
                fill="currentColor"
              ></path>
              <path
                d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z"
                stroke-width="0"
                fill="currentColor"
              ></path>
            </svg>
            <span>Contacto</span>{' '}
          </h2>
          <div className="mb-0 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
            <a
              href="https://www.linkedin.com/in/jordi-aguilera-zamora/"
              className="group flex items-center justify-center gap-4 rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="48"
                  height="48"
                  fill="rgb(45, 100, 188)" // Usando fill para cambiar el color del SVG
                >
                  <g>
                    <path
                      id="Path_2520"
                      d="M17.291,19.073h-3.007v-4.709c0-1.123-0.02-2.568-1.564-2.568c-1.566,0-1.806,1.223-1.806,2.487v4.79H7.908   V9.389h2.887v1.323h0.04c0.589-1.006,1.683-1.607,2.848-1.564c3.048,0,3.609,2.005,3.609,4.612L17.291,19.073z M4.515,8.065   c-0.964,0-1.745-0.781-1.745-1.745c0-0.964,0.781-1.745,1.745-1.745c0.964,0,1.745,0.781,1.745,1.745   C6.26,7.284,5.479,8.065,4.515,8.065L4.515,8.065 M6.018,19.073h-3.01V9.389h3.01V19.073z M18.79,1.783H1.497   C0.68,1.774,0.01,2.429,0,3.246V20.61c0.01,0.818,0.68,1.473,1.497,1.464H18.79c0.819,0.01,1.492-0.645,1.503-1.464V3.245   c-0.012-0.819-0.685-1.474-1.503-1.463"
                    />
                  </g>
                </svg>
              </div>
              <h2 className={` text-3xl font-semibold`}>LinkedIn </h2>
            </a>

            <a
              href="https://github.com/jordi-az"
              className="group flex items-center justify-center gap-4 rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="42"
                  height="42"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12,0.296c-6.627,0-12,5.372-12,12c0,5.302,3.438,9.8,8.206,11.387c0.6,0.111,0.82-0.26,0.82-0.577c0-0.286-0.011-1.231-0.016-2.234c-3.338,0.726-4.043-1.416-4.043-1.416C4.421,18.069,3.635,17.7,3.635,17.7c-1.089-0.745,0.082-0.729,0.082-0.729c1.205,0.085,1.839,1.237,1.839,1.237c1.07,1.834,2.807,1.304,3.492,0.997C9.156,18.429,9.467,17.9,9.81,17.6c-2.665-0.303-5.467-1.332-5.467-5.93c0-1.31,0.469-2.381,1.237-3.221C5.455,8.146,5.044,6.926,5.696,5.273c0,0,1.008-0.322,3.301,1.23C9.954,6.237,10.98,6.104,12,6.099c1.02,0.005,2.047,0.138,3.006,0.404c2.29-1.553,3.297-1.23,3.297-1.23c0.653,1.653,0.242,2.873,0.118,3.176c0.769,0.84,1.235,1.911,1.235,3.221c0,4.609-2.807,5.624-5.479,5.921c0.43,0.372,0.814,1.103,0.814,2.222c0,1.606-0.014,2.898-0.014,3.293c0,0.319,0.216,0.694,0.824,0.576c4.766-1.589,8.2-6.085,8.2-11.385C24,5.669,18.627,0.296,12,0.296z"
                  />
                </svg>
              </div>
              <h2 className={`text-3xl font-semibold`}>GitHub </h2>
            </a>
          </div>
          <br></br>
          <div className="flex w-full items-center space-x-4">
            <span className="flex-grow text-center text-base md:text-2xl font-mono bg-gray-200 text-black border-2 border-slate-700 rounded-xl px-4 py-2 shadow-lg block">
              jordi_az@outlook.com
            </span>

            <Link
              href="mailto:jordi_az@outlook.com"
              className="flex-shrink-0 px-0 py-0 group rounded-lg grid place-content-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4.698 4.034l16.302 7.966l-16.302 7.966a.503 .503 0 0 1 -.546 -.124a.555 .555 0 0 1 -.12 -.568l2.468 -7.274l-2.468 -7.274a.555 .555 0 0 1 .12 -.568a.503 .503 0 0 1 .546 -.124z"></path>
                <path d="M6.5 12h14.5"></path>
              </svg>
              <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-12 px-4 py-2 rounded-xl bg-white text-black w-32 transition-opacity duration-200 ease-out opacity-0 group-hover:opacity-100 text-center">
                Enviar email
              </span>
            </Link>

            <button
              id="button-copy-email"
              onClick={handleCopy}
              className="flex-shrink-0 px-0 py-0 group rounded-lg grid place-content-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z"></path>
                <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"></path>
              </svg>
              <span
                id="tooltip-email"
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-12 px-4 py-2 rounded-xl bg-white text-black w-32 transition-opacity duration-200 ease-out opacity-0 group-hover:opacity-100 text-center"
              >
                Copiar email
              </span>
            </button>
            {copied && (
              <div className="absolute top-0 align-middle bg-green-500 text-white px-4 py-2 rounded-lg shadow-md">
                ¡Texto copiado!
              </div>
            )}
          </div>
        </div>
      </footer>
    </>
  );
}
