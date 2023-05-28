import {RiFacebookCircleFill, RiLinkedinFill, RiGithubFill } from "react-icons/ri"

export default function Footer() {
  return (
    <div className="footer h-[20vh] w-full bg-gray-200 border-2 sm:border-0 border-b-0 border-gray-950 dark:border-white dark:bg-gray-950 rounded-t-3xl sm:rounded-none">
        <div className=" h-full w-full blur-none filter-none">
            <div className="flex h-full w-full justify-center items-center">
                <div>
                <div className="">
                    <h1>Copyright © 2023 RABE Marcellin. Tous droits réservés.</h1>
                </div>
                <div className="flex justify-center gap-2">
                    <div>
                        <a href="https://www.facebook.com/rabemarcellin"><RiFacebookCircleFill size={32} /></a>
                    </div>
                    <div>
                        <a href="https://linkedin.com/in/marcellinrabe"><RiLinkedinFill size={32} /></a>
                    </div>
                    <div>
                        <a href="https://www.github.com/marcellinrabe"><RiGithubFill size={32} /></a>
                    </div>
                </div> 

                </div>
            </div>
        </div>
    </div>
   
  )
}
