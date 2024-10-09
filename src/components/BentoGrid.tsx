import './BentoGrid.css'
import star from '../assets/illustration-five-stars.webp'
import posts from '../assets/illustration-schedule-posts.webp'
import schedule from '../assets/illustration-consistent-schedule.webp'
import illustrationAudiencegrowth from '../assets/illustration-audience-growth.webp'
import illustrationCreatePost from '../assets/illustration-create-post.webp'
import illustrationAi from '../assets/illustration-ai-content.webp'
import growFlowers from '../assets/illustration-grow-followers.webp'
import multiplePlatforms from '../assets/illustration-multiple-platforms.webp'
const BentoGrid = () => {
  return (
    <div className='container'>
  <div className='item1'>
      <div className='createPost'>
      <h2>Create and schedule content <span style={{color:"blue"}}> quicker</span></h2>
      <img src={illustrationCreatePost} />
      </div>
      <div className='contentAi'>
        <h2>Write your content using AI</h2>
            <div>
              <img src={illustrationAi}  />    
           </div>
      </div>
  </div>
  <div className="item2">
    <div className='social'>
      <h1>Social Media <span style={{color:"hsl(39, 100%, 71%)"}}>10x</span> Faster with AI</h1>
      <img src={star} alt="five stars" />
      <p>Over 4,000 5-star reviews </p>
    </div>
    <div>
    <div className='accounts'> 
        <div className='post'>
       <div className='posts'>
            <img src={multiplePlatforms} alt="multiple platforms"/>
            <h3>Manage multiple accounts and platforms</h3>
       </div>
        <div className='posting'>
          <h3>Maintain a consistent posting schedule</h3>
          <img src={schedule} alt="schedule" />
        </div>
        </div>
         <div className='post'>
        <div className='growth'>
            <h2>&gt;56%</h2>
            <p>faster audience growth</p>
            <img src={illustrationAudiencegrowth} alt="avatars" />
        </div>
        <div className='flower'>
            <img src={growFlowers} alt="growth graph" />
            <h2>Grow followers with non-stop content</h2>
        </div>
        </div>
    </div>
  </div>
  </div>
  <div className="item3">
    <h3> Schedule to social media</h3>
    <img src={posts} alt="posts graph" />
    <p> Optimize post timings to publish content at the perfect time for your audience</p>
  </div>
    </div>
  )
}

export default BentoGrid
