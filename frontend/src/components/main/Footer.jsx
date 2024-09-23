import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-white rounded-lg bg-gray-50 w-full p-4">
            <div className="w-full max-w-screen-xl mx-auto">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                    <Image src="/seitc.png" className="w-56" width={300} height={100} alt="seitc" />
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 font-medium text-gray-500 sm:mb-0 ">
                        <li className="mr-3">
                            <a href="https://www.instagram.com/seitc.chih?igsh=MTA4am9pNm51bXJ0OA==" target="_blank" className="me-4 md:me-6">
                                <FontAwesomeIcon className="text-gray-400 text-sm" icon={faInstagram} />
                            </a>
                        </li>
                        <li className="mr-3">
                            <a href="#" className="me-4 md:me-6">
                                <FontAwesomeIcon className="text-gray-400 text-sm" icon={faFacebook} />
                            </a>
                        </li>
                        <li>
                            <a href="/" className="me-4 md:me-6">
                                <FontAwesomeIcon className="text-gray-400 text-sm" icon={faGlobe} />
                            </a>
                        </li>
                    </ul>
                </div>    
            </div>
        </footer>


    )
}