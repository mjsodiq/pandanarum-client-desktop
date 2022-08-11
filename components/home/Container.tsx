import Image from "next/image";
import Link from "next/link";

const button_style = "w-full sm:w-[150px] h-[50px] hover:bg-slate-300 transition duration-600";

function Container() {
    return (
        <div className="flex flex-col items-center justify-center gap-10 flex-1 pt-10 sm:pt-20">
            <Image src="/logo1.png" alt="" width={150} height={150} />
            <div className="flex flex-col sm:gap-5 w-full items-center justify-center bg-slate-400 text-white sm:flex-row">
                <button className={`${button_style} sm:flex-1 sm:text-right px-5`}>Home</button>
                <button className={`${button_style}`}>Pesan Online</button>
                <div className={`${button_style}`}>
                    <Link href={"https://store.pandanarum.com/search"}>
                        <a target="blank">
                            <button className={`${button_style}`}>Produk</button>
                        </a>
                    </Link>
                </div>
                <button className={`${button_style} sm:flex-1 sm:text-left px-5`}>Kontak</button>
            </div>
        </div>
    );
}

export default Container;
