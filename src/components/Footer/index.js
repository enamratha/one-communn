import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => (
    <div className="bg-black text-white flex flex-col p-5">
        <div className="flex flex-wor justify-between px-3">
            <div className="w-6/12">
                <div>
                    <img 
                    className="h-24"
                    src="https://s3-alpha-sig.figma.com/img/d7fb/35d1/0a5d5473989ba4ec575b8af8fe1f746c?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n-vbAPQ05LmD8Nda2f2mGNfZTgj7C6YBEioDb~0ls1JxMZ5voB4rtvKkqDu8mDFa9VKS4X~28N4hO14wVLH-Aaips877QZP2jTVclw~oKbP2-R0Qz-NXaQES6jgHdYYG6XJTT31iOazUoRUpPb3Y9U-8~DwuxkzPZnq5SG3zOgqASsaIeiHiO7uId7sMl7jnpznKoyNk~F-lEI73oUHez4df0sd86oEDWzKWRAGY~oxiwQv2J5iJ3PZpHP3RN-~i7P29JdHP6US2hi4N-MOlhHADGHdxVYkiuJ~y4k1eyZUHYlLo-~TAMM1nHamq4uA7BPtgQPLwN19MZEeOlGHqOw__" alt="vibrer logo"/>
                </div>
                <p>Your dream space deserves the best execution, and that’s where
                    United Buildpro Pvt Ltd excels. Our construction services
                    encompass everything from foundational work to structural builds,
                    tailored to residential, commercial, and industrial needs. We pride
                    ourselves on using high-quality materials and advanced
                    techniques to ensure durability and efficiency in every project we
                    undertake.
                </p>
                <div className="flex my-2">
                    <a className="mx-1">
                        <FaInstagram className=""/>
                    </a>
                    <a className="mx-1">
                        <FaLinkedin/>
                    </a>
                </div>
            </div>
            <div className="flex flex-row w-3/12">
                <ul className="mx-5">
                    <li><a>Home</a></li>
                    <li><a>Living</a></li>
                    <li><a>Storage</a></li>
                    <li><a>Dining</a></li>
                    <li><a>Bedroom</a></li>
                    <li><a>Matress</a></li>
                    <li><a>Study</a></li>
                    <li><a>Office</a></li>
                    <li><a>Outdoor</a></li>
                </ul>
                <ul>
                    <li><a>Residential</a></li>
                    <li><a>Instuitional</a></li>
                    <li><a>Commercial</a></li>
                </ul>
            </div>
        </div>
        <div className="text-center my-3 px-3">
            <hr className="bg-white my-3"/>
            <p>2024 © All rights reserved - Cozy Comfort</p>
            <img 
            className="mx-auto"
            src="https://s3-alpha-sig.figma.com/img/3ab9/eeb0/e196ede389387ab9e06d10d71ce9b10e?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LNTwUY4uSrRu2N7zb5JVUSxrebvHcRD16NWb6iCg~nP9UvpRlYMSof~ZUorH0ehgJFPOFR9wmDxuzdDoq-ez5fgNVVg4XdLzitmu5T~HKn1SS20Ox~ST5gis5Kp60DTVNn8OO8VgeNhOR3X0xIrGn8LXHEwdp~OFMluGXPRJMWsEeoU5PBpG93z45rOKcIaB4Lhk5CJA7Dw6BpLnPJL~VXfAzanIznxxRYq3EP1wi3JXo1i4oeKlBufOjH5IgKmaTu2PpmamU-KzrR91OaddMfoylzO8dibDAWYwRGh7p38g~QQx5H4w~EYAF5lKEmoP76bsyG7w0xMBCmtBRnmHcQ__" 
            alt="payment-options"/>
        </div>
    </div>
)

export default Footer