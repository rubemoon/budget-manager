import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    return (
        <div className="">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                {/* Announcement Banner */}
                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <a className="group inline-flex items-center bg-white/20 hover:bg-white/30 border border-white/20 p-1 ps-4 rounded-full shadow-md focus:outline-none focus:bg-white/30 dark:bg-white/10 dark:hover:bg-white/20 dark:border-white/10 dark:focus:bg-white/20" href="https://blog.kozenetpro.com" target="_blank" rel="noopener noreferrer">
                        <span className="me-2 text-gray-900 text-sm dark:text-gray-200">
                            blog.kozenetpro.com
                        </span>
                        <span className="group-hover:bg-white/30 py-1.5 px-2.5 flex justify-center items-center gap-x-2 rounded-full bg-white/20 font-semibold text-gray-900 text-sm dark:bg-white/10 dark:text-gray-200 dark:group-hover:bg-white/20">
                            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                        </span>
                    </a>
                </motion.div>
                {/* End Announcement Banner */}

                {/* Title */}
                <motion.div
                    className="max-w-3xl text-center mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h1 className="block font-medium text-gray-900 text-4xl sm:text-5xl md:text-6xl lg:text-7xl dark:text-gray-200">
                        Gerenciador de Orçamento Pessoal
                    </h1>
                </motion.div>
                {/* End Title */}

                <motion.div
                    className="max-w-3xl text-center mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <p className="text-lg text-gray-900 dark:text-gray-200">
                        "Gerenciador de Orçamento Pessoal" é uma aplicação web que permite aos usuários gerenciar sua renda e despesas mensais. Os usuários podem adicionar, editar e excluir entradas de renda e despesas, e o aplicativo exibirá um resumo do total de renda, total de despesas e o saldo restante.
                    </p>
                </motion.div>

                {/* Buttons */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <a className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:shadow-blue-700/50 py-3 px-6" href="/dashboard">
                        Começar Aqui
                        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </a>
                </motion.div>
                {/* End Buttons */}
            </div>
        </div>
    );
};

export default Hero;