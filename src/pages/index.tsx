import  styles from "../styles/pages/Home.module.css";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";


export default function Home() {
  return (
    <div className={styles.container}>
    
    <ExperienceBar/>
    
    <section>
      <div> 
        <Profile/>
        <CompletedChallenges/>
        <Countdown/>  
      </div>
      <div>
      </div>
    </section>

  </div>
  )
}
