"use client"
import { useState, useEffect } from "react"
import qrcode from "qrcode";
import Image from "next/image";

export default function QrIntent({ id }) {
    const [src, setSrc] = useState()

    useEffect(() => {
        qrcode.toDataURL(`${window.location.origin}/${id}`, (err, url) => {
            setSrc(url)
        })

    }, [])

    return (
        <div>
            <Image src={src} alt="" width={300} height={300} />
        </div>
    )
}