import {RiFacebookCircleFill, RiLinkedinFill, RiGithubFill } from "react-icons/ri"

export default function Footer() {
  return (
    <div className="grid justify-center mt-8 dark:text-white">
        <div className="text-center">
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
  )
}
