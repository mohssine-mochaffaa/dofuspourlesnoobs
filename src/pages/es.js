import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link";
import { useState } from 'react';
import Router from 'next/router';


export default function Home3() {
  const [visible3,setVisible3] = useState(false)
  const pageLink = "https://dofuspourlesn00bs.vercel.app/dofus/es";


  return (
    <>
      <Head>
        <title>mina forjelancial</title>
        <meta name="description" content="Gracias a esta actualización, los aventureros que buscan constantemente un desafío pronto tendrán algo para comer. Durante varios días, podrán codearse con los .." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon2.ico"/>
      </Head>
      <div className={styles.App}> 
      <div className={styles.all}>
      <nav>
        <div className={styles.navContainer}>
          <a href=""><Image width={130} height={20} src="/assets/logoHome.png"/></a>
          <p onClick={()=> Router.push("https://www.dofuspourlesnoobs.com/mise-a-jour-249.html")}>HOGAR</p>
          <p onClick={()=> Router.push("https://www.dofuspourlesnoobs.com/donjons.html")}>MAZMORRAS</p>
          <p onClick={()=> Router.push("https://www.dofuspourlesnoobs.com/quecirctes.html")}>CONSULTAS</p>
          <p onClick={()=> Router.push("https://www.dofuspourlesnoobs.com/index.html")}>TUTORIALES</p>
          <div className={styles.recherche}>
            <input type="text" placeholder='Busca...'/>
            <div className={styles.searchIcon}></div>
          </div>
        </div>
      </nav>
      <div className={styles.myImg}>
      <Image src="/assets/main.jpg" layout='fill' />
      </div>      <div className={styles.navImage}>
      <div className={styles.imgsContainer}>
      <div className={styles.imgs}>
        <div className={styles.mini}>
          <a href="https://www.dofuspourlesnoobs.com/index.html"><Image  src="/assets/img1.jpg"  layout='fill'/></a>
        </div>
        <div  className={styles.mini}>
        <a href="https://www.dofuspourlesnoobs.com/index.html"><Image  src="/assets/img2.jpg"  layout='fill'/></a>

        </div>
        <div className={styles.mini}>
        <a href="https://www.dofuspourlesnoobs.com/index.html"><Image  src="/assets/img3.jpg"  layout='fill'/></a>
        </div>
      </div>
      </div>
      </div>
      
      <center>
      <div style={{paddingTop:"50px"}} className={styles.main}>
        <div className={styles.mainContanier}>
          <div className={styles.box}>
            <center>
          <h1>MINA FORJELANCIAL [DOFUS]</h1>
          </center>
          <div className={styles.mainInfos}>
            <div className={styles.mainImgSection}>
            <img src="/assets/mainImg.jpg" />
            <br /><br />
            <p className={styles.date}>Publicado el 02/03/2023.</p>
            <p className={styles.date}>Última actualización el 03/03/2023.</p>
            </div>
            <div className={styles.inline}></div>
            <div className={styles.mainrightInfos}>
              <h3>Prerrequisito :</h3>
              <div className={styles.pre}>
              <ul>
                <li>Desbloquee el acceso desde el sitio web oficial sobre el siguiente tema: </li>
                <Link className={styles.link} href={pageLink} style={{color:"red",textDecoration:"none",paddingLeft:"12px"}} shallow>https://dofus.com/es/mmorpg/actualites <div style={{marginLeft:"12px",marginTop:"-15px"}} className="underline"><br /></div>/news/mine-valoniale/</Link>

              </ul>
              </div>
              <h3>Recompensas :</h3>
              <div className={styles.pre}>
              <ul>
                <li>Acceso al Mina forjelancial</li>
              </ul>
              </div>
            </div>
          </div>

            <br /><br />
            <div className={styles.texting}>

            <p className={styles.text}>Para acceder al Santuario, simplemente desbloquea el acceso a tu personaje desde el sitio web oficial de dofus.</p>
            <p className={styles.text}>Tendrás que seleccionar del sitio el personaje al que quieres desbloquear el acceso</p>
            <p className={styles.text}>Una vez desbloqueado el acceso al personaje elegido, ve al DJ para hablar con el NPC</p>
            <p className={styles.text2}>La misión termina y se desbloquea: Acceso al Mina forjelancial.</p>
            </div>
          <br /><br />
          <h5>
          Comentario
          </h5>

          </div>
        </div>
      </div>
      </center>
      
      <footer>
        <br /><br />
        <div className={styles.first}>
          <div className={styles.footerInput}>
          <input placeholder='Busca una mazmorra, una misión' type="text" />
          </div>
         <a href="">Informar de un problema.</a>
        </div>

        <div className={styles.second}>
          <div className={styles.social}>

          </div>
        </div>
        <br /><br />
        <center>
        <div className={styles.third}>
          <div className={styles.texting3}>
            <p>Dofus es un MMORPG publicado por <a href="">Ankama</a>. "dofuspourlesnoobs" es un sitio no oficial sin conexión con Ankama.</p>
            <p>Algunas ilustraciones son propiedad de Ankama Studio y Dofus - Todos los derechos reservados</p>
            <p>Copyright © 2013 - 2020 Dofus for Noobs - Por favor, no copie el contenido de este sitio sin permiso.</p>
            <p>Sitios de red: <a href="">Dofus pour les Noobs</a> - <a href="">Dotrofus</a> - <a href="">DimTopia</a></p>
            <p><a href="">Legal</a> / <a href="">Información sobre cookies</a> / <a href="">Privacidad / Contáctenos</a></p>

            <br />
            <p>Este es el resultado de la demostración gratuita. Para obtener una versión completa de este sitio web, vaya a <a href="">https://www6.waybackmachinedownloader.com/website-downloader-online/scrape-all-files/</a></p>
          </div>
        </div>
        </center>
      </footer>
      </div>
    </div>
    </>
  )
}
