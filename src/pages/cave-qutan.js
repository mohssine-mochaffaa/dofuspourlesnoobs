import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link";
import Router from 'next/router';


export default function Home() {
 

  return (
    <>
      <Head>
      <title>CAVE DU QUTAN</title>
      <link rel="shortcut icon" href="/favicon2.ico"/>

<meta
  name="description"
  content="Accès a la Dimension Forgelanciale..."
/>
      </Head>
      <div className={styles.App}>
      <div className={styles.all}>
      <nav>
        <div className={styles.navContainer}>
          <a href=""><Image width={130} height={20} src="/assets/logoHome.png" /></a>
          <p onClick={()=> Router.push("https://www.dofuspourlesnoobs.com/mise-a-jour-249.html")}>ACCEUIL</p>
          <p onClick={()=> Router.push("https://www.dofuspourlesnoobs.com/donjons.html")}>DONJONS</p>
          <p onClick={()=> Router.push("https://www.dofuspourlesnoobs.com/quecirctes.html")}>QUETES</p>
          <p onClick={()=> Router.push("https://www.dofuspourlesnoobs.com/index.html")}>TUTORIELS</p>
          <div className={styles.recherche}>
            <input type="text" placeholder='Rechercher...'/>
            <div className={styles.searchIcon}></div>
          </div>
        </div>
      </nav>
      <div className={styles.myImg}>
      <Image src="/assets/main.jpg" layout='fill' />
      </div>
      <div className={styles.navImage}>
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
          <h1>CAVE DU QUTAN [QUÊTE DOFUS RETRO]</h1>
          </center>
          <div className={styles.mainInfos}>
            <div className={styles.mainImgSection}>
            <img src="/assets/qutan2.jpg" />
            <br /><br />
            <p className={styles.date}>Mis en ligne le 02/03/2023.</p>
            <p className={styles.date}>Dernière mise à jour le 03/03/2023.</p>
            </div>
            <div className={styles.inline}></div>
            <div className={styles.mainrightInfos}>
              <h3>Prérequis :</h3>
              <div className={styles.pre}>
              <ul>
                <li>Débloquez l'accès à partir du site officiel sur la rubrique suivante : </li>
                <Link className={styles.link} href={{
                  pathname:"/dofus/cave-qutan",
                }} style={{color:"red",textDecoration:"none",paddingLeft:"12px"}} shallow>https://dofus.com/fr/mmorpg/actualites <div style={{marginLeft:"12px",marginTop:"-15px"}} className="underline"><br /></div>/news/cave-qutan/</Link>

              </ul>
              </div>
              <h3>Récompenses :</h3>
              <div className={styles.pre}>
              <ul>
                <li>Accès a la Cave Ereboriale</li>
              </ul>
              </div>
            </div>
          </div>
 
            <br /><br />
            <div className={styles.texting}>

            <p className={styles.text}>Pour accéder à la Cave Du Qutan, il vous faudra débloquer l'accès sur votre personnage à partir du site officiel de dofus.</p>
            <p className={styles.text}>Il vous faudra sélectionner à partir du site le personnage sur lequel vous souhaitez débloquer l'accès</p>
            <p className={styles.text}>Une fois l'accès débloqué sur le personnage choisis , rendez vous devant le DJ Qutan pour parler au pnj</p>
            <p className={styles.text2}>La quête se termine et débloque : Accès à la Cave Du Qutan.</p>
            </div>
          <br /><br />
          <h5>
            Commenter
          </h5>

          </div>
        </div>
      </div>
      </center>
      
      <footer>
        <br /><br />
        <div className={styles.first}>
          <div className={styles.footerInput}>
          <input placeholder='Chercher un donjon, une quete' type="text" />
          </div>
         <a href="">Signaler un problème.</a>
        </div>

        <div className={styles.second}>
          <div className={styles.social}>

          </div>
        </div>
        <br /><br />
        <center>
        <div className={styles.third}>
          <div className={styles.texting3}>
            <p>Dofus est un MMORPG édité par <a href="">Ankama</a>. "dofuspourlesnoobs" est un site non-officiel sans aucun lien avec Ankama.</p>
            <p>Certaines illustrations sont la propriété d'Ankama Studio et de Dofus - Tous droits réservés</p>
            <p>Copyright © 2013 - 2020 Dofus pour les Noobs - Merci de ne pas copier le contenu de ce site sans autorisation.</p>
            <p>Sites du réseau : <a href="">Dofus pour les Noobs</a> - <a href="">Dotrofus</a> - <a href="">DimTopia</a></p>
            <p><a href="">Mentions légales</a> / <a href="">Informations sur les cookies</a> / <a href="">Confidentialité / Nous contacter</a></p>

            <br />
            <p>This is the free demo result. For a full version of this website, please go to <a href="">https://www6.waybackmachinedownloader.com/website-downloader-online/scrape-all-files/</a></p>
          </div>
        </div>
        </center>
      </footer>
      </div>
    </div>
    </>
  )
}
