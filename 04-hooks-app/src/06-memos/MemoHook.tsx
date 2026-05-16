import { MyTitle } from './ui/MyTitle'
import { MySubtitle } from './ui/MySubtitle'
import { useCallback, useState } from 'react'

const handleMyAPICallFueraComponente = (myValue: string) => {
    console.log('Llamar a API fuera de componente', myValue);
}

export const MemoHook = () => {
    const [title, setTitle] = useState('hola');
    const [subtitle, setSubtitle] = useState('mundo');

    const handleMyAPICall = useCallback(() => {
        console.log('Llamar a API', subtitle);
    }, [subtitle])

    return (
        <div className='bg-gradient flex flex-col gap-4'>
            <h1 className='text-2xl font-thin text-white'>Memo App</h1>

            <MyTitle title={title} />
            <MySubtitle subtitle={subtitle} callMyAPI={handleMyAPICall} callMyAPIFueraComponente={handleMyAPICallFueraComponente} />

            <button
                className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'
                onClick={() => setTitle('Hello, ' + new Date().getTime())}
            >
                Cambiar titulo
            </button>
            <button
                className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'
                // onClick={() => setSubtitle('World, ' + new Date().getTime())}
                onClick={() => setSubtitle('World')}
            >
                Cambiar subtitulo
            </button>

        </div>
    )
}
