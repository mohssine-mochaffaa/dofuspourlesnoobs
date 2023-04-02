import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link";
import { useState } from 'react';
import Router from 'next/router';


export default function Home2() {
  const [visible3,setVisible3] = useState(false)
  const pageLink = "https://dofuspourlesn00bs.vercel.app/dofus/en";


  return (
    <>
      <Head>
      <title>cave ereboriale[DOFUS]</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon2.ico"/>
        
      </Head>
      <div className={styles.App}>
      <div className={styles.all}>
      <nav>
        <div className={styles.navContainer}>
          <a href=""><Image width={130} height={20} src="/assets/logoHome.png" /></a>
          <p onClick={()=> Router.push("https://www.dofuspourlesnoobs.com/mise-a-jour-249.html")}>HOME</p>
          <p onClick={()=> Router.push("https://www.dofuspourlesnoobs.com/donjons.html")}>DUNGEONS</p>
          <p onClick={()=> Router.push("https://www.dofuspourlesnoobs.com/quecirctes.html")}>QUERIES</p>
          <p onClick={()=> Router.push("https://www.dofuspourlesnoobs.com/index.html")}>TUTORIALS</p>
          <div className={styles.recherche}>
            <input type="text" placeholder='Search...'/>
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
          <h1>SANCTUAIRE VALONIALE [DOFUS]</h1>
          </center>
          <div className={styles.mainInfos}>
            <div className={styles.mainImgSection}>
            <img src="/assets/mainImg.jpg" />
            <br /><br />
            <p className={styles.date}>Posted on 02/03/2023.</p>
            <p className={styles.date}>Last updated on 03/03/2023.</p>
            </div>
            <div className={styles.inline}></div>
            <div className={styles.mainrightInfos}>
              <h3>Prerequisite :</h3>
              <div className={styles.pre}>
              <ul>
                <li>Unblock access from the official website on the following topic: </li>
                <Link className={styles.link} href={pageLink} style={{color:"red",textDecoration:"none",paddingLeft:"12px"}} shallow>https://dofus.com/en/mmorpg/actualites <div style={{marginLeft:"12px",marginTop:"-15px"}} className="underline"><br /></div>/news/mine-valoniale/</Link>

              </ul>
              </div>
              <h3>Rewards :</h3>
              <div className={styles.pre}>
              <ul>
                <li>Access to the Valonial Sanctuary</li>
              </ul>
              </div>
            </div>
          </div>

            <br /><br />
            <div className={styles.texting}>

            <p className={styles.text}>To access the Sanctuary, simply unlock access to your character from dofus' official website.</p>
            <p className={styles.text}>You will have to select from the site the character on which you want to unlock access</p>
            <p className={styles.text}>Once the access is unlocked on the chosen character, go to the DJ to talk to the NPC</p>
            <p className={styles.text2}>The quest ends and unlocks: Access to the Valunial Sanctuary.</p>
            </div>
          <br /><br />
          <h5>
            Comment
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
         <a href="">Report a problem.</a>
        </div>

        <div className={styles.second}>
          <div className={styles.social}>

          </div>
        </div>
        <br /><br />
        <center>
        <div className={styles.third}>
          <div className={styles.texting3}>
            <p>Dofus is an MMORPG published by <a href="">Ankama</a>. "dofuspourlesnoobs" is an unofficial website with no connection to Ankama.</p>
            <p>Some illustrations are the property of Ankama Studio and Dofus - All rights reserved</p>
            <p>Copyright © 2013 - 2020 Dofus for Noobs - Please do not copy the content of this site without permission.</p>
            <p>Network sites: <a href="">Dofus pour les Noobs</a> - <a href="">Dotrofus</a> - <a href="">DimTopia</a></p>
            <p><a href="">Legal</a> / <a href="">Information about cookies</a> / <a href="">Privacy / Contact Us</a></p>

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
