import {RiFacebookCircleFill, RiLinkedinFill, RiGithubFill } from "react-icons/ri"

export default function Footer() {
  return (
    <div className="footer py-8 w-full">
        <div className=" h-full w-full blur-none filter-none">
            <div className="flex h-full w-full justify-center items-center">
                <div>
                <div className="">
                    <h1>Copyright © 2023 RABE Marcellin. Tous droits réservés.</h1>
                </div>
                <div className="flex justify-center gap-2">
                    <div>
                        <a href="https://www.facebook.com/rabemarcellin"><RiFacebookCircleFill size={32} className="hover:text-gray-500" /></a>
                    </div>
                    <div>
                        <a href="https://linkedin.com/in/marcellinrabe"><RiLinkedinFill size={32} className="hover:text-gray-500" /></a>
                    </div>
                    <div>
                        <a href="https://www.github.com/marcellinrabe"><RiGithubFill size={32} className="hover:text-gray-500" /></a>
                    </div>
                </div> 

                </div>
            </div>
        </div>
    </div>
   
  )
}
