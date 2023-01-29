import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className='Title'>Bem Vindo ao Conversorim</div>
      <div className='subTitle'>Converta Diferentes tipos de dados em outros com facilidade</div>

    <div className='Convert'>

    <div className="inputGroup">
    <input placeholder='Minutos' type="text" className='Minutes' autoComplete="off" />
</div>

<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className=" Arrow bi bi-arrow-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
</svg>

    <div className="card">

    <div className="circle"></div>
    <div className="circle"></div>
    <div className="card-inner">      <h1>2horas 53 minutos e 38 segundos</h1></div>
</div>
</div>


    </main>
  )
}
