import { About } from "./About/About"
import { Achievments } from "./Achievments/Achievments"
import { Adv } from "./Adv/Adv"
import { Portfolio } from "./Portfolio/Portfolio"
import { Price } from "./Price/Price"
import { Promo } from "./Promo/Promo"
import { SignUp } from "./SignUp/SignUp"


export const Main = () => {
  return (
      <main className="main">
          <Promo />
          <About />
          <Portfolio />
          <Adv />
          <Achievments />
          <Price />
          <SignUp />
        </main>
  )
}
