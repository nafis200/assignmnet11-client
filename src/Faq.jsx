import { Slide } from 'react-awesome-reveal'
const Faq = () => {
  return (
    <div>
      <Slide direction={'left'}><h2 className="text-2xl text-center mt-8">
        Here give some frequently question answer
      </h2></Slide>
     <div className="space-y-4">
     <div className="collapse collapse-arrow bg-base-200 mt-5">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">
        How can online group study enhance learning compared to individual study?
        </div>
        <div className="collapse-content">
          <p>Online group study fosters collaboration and peer learning, offering diverse perspectives and insights. It promotes active engagement through discussions, debates, and shared problem-solving, which can deepen understanding and retention of course material.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        What are some effective strategies for managing group dynamics in online study groups?
        </div>
        <div className="collapse-content">
          <p> Establishing clear communication channels, setting mutual expectations, and assigning roles/responsibilities can help manage group dynamics effectively. Regular check-ins, respectful dialogue, and conflict resolution strategies are also crucial for maintaining a positive and productive atmosphere.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        How can online tools and platforms be utilized to facilitate collaborative learning in study groups?
        </div>
        <div className="collapse-content">
          <p> Online tools such as video conferencing platforms (like Zoom or Google Meet), collaborative document editors (such as Google Docs or Microsoft Teams), and virtual whiteboards (like Miro or Jamboard) can facilitate real-time collaboration, document sharing, and brainstorming sessions among group members.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        What are some challenges that students may encounter in online group study assignments, and how can they be overcome
        </div>
        <div className="collapse-content">
          <p> Challenges may include scheduling conflicts, differences in work pace, and technology issues. To address these challenges, establishing a flexible schedule, setting realistic goals, and providing technical support/resources can help. Additionally, fostering open communication and a supportive environment can mitigate misunderstandings and conflicts.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        How can online group study assignments promote critical thinking and problem-solving skills?
        </div>
        <div className="collapse-content">
          <p>Online group study assignments often involve analyzing complex problems, discussing various solutions, and synthesizing ideas from multiple perspectives. Engaging in such collaborative tasks encourages participants to think critically, evaluate evidence, and develop innovative solutions through collective brainstorming and peer feedback.</p>
        </div>
      </div>
     </div>
    
     
    </div>
  );
};

export default Faq;
