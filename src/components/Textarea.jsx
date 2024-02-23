import './Textarea.css'

function Textarea() {
    return (
        <div className="containerTextarea">
            <div>
                <h2>
                    Escuchar
                </h2>
            </div>
            <div className='group'>
                <div className="cont-actions">
                    {/* Escuchar */}
                    <button >
                        <svg className='logo-actions' data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"></path>
                        </svg>
                    </button>
                    {/* Pausar */}
                    <button >
                        <svg className='logo-actions' data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                        </svg>
                    </button>
                    {/* Terminar */}
                    <button >
                        <svg className='logo-actions' data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z"></path>
                        </svg>
                    </button>
                </div>
                <div className='cont-Textarea'>
                    <textarea name="" id="" cols="30" rows="10">

                    </textarea>
                </div>
            </div>
        </div>
    )
}

export default Textarea