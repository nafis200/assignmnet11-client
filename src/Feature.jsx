import Featurecard from "./Featurecard";
import { Slide } from 'react-awesome-reveal'

const Feature = () => {

    
const card = [
    {
      "title": "Collaborative Learning",
      "description": "Engage in group discussions, share knowledge, and learn from peers.",
      "image": "https://i.postimg.cc/4Nk60tF4/1000-F-698152829-9y-HOCg5bw-Ub-T2izu8-J9ueego-QKCMCp-A0.jpg",
      "benefit": "Enhances understanding through diverse perspectives and collective problem-solving."
    },
    {
      "title": "Scheduled Study Sessions",
      "description": "Organize group study sessions at convenient times for all members.",
      "image": "https://i.postimg.cc/X7kCDPCx/1000-F-655385566-BGXSk-HX10-Nj-Rjx-ZIBiu-S9-IZc-Cmnqrzag.jpg",
      "benefit": "Promotes accountability and consistency in study routines."
    },
    {
      "title": "Resource Sharing",
      "description": "Share study materials, notes, and resources with fellow group members.",
      "image": "https://i.postimg.cc/8CJsDXj2/1000-F-788108257-0-QHVo-V9-Ui-Jgzzncvpq-NMNrgxr-QNZU7l-Y.jpg",
      "benefit": "Expands access to learning materials and fosters a supportive learning community."
    },
    {
      "title": "Peer Feedback",
      "description": "Receive constructive feedback from peers to improve understanding and performance.",
      "image": "https://i.postimg.cc/85L5fFdw/1000-F-714435943-0x-Giu-Yo4gxv-FFrdeiolzqfm-VSRIZGjn-S.jpg",
      "benefit": "Facilitates active learning and helps identify areas for improvement."
    },
    {
      "title": "Virtual Study Rooms",
      "description": "Utilize online platforms to create virtual study spaces for group collaboration.",
      "image": "https://i.postimg.cc/fTqwLjnD/1000-F-788568342-UYehda-Xnt7-EFE1-Nzyunp-N4tlhyl-Ueqmx.jpg",
      "benefit": "Provides a convenient and flexible environment for group study sessions."
    },
    {
      "title": "Task Delegation",
      "description": "Divide study tasks among group members to maximize efficiency and productivity.",
      "image": "https://i.postimg.cc/vByyj09L/1000-F-699036581-3-V75v-Kv1-Sf-C8-Aw-Qr-E3-HSjgs7j-Gap-YRNf.jpg",
      "benefit": "Allows members to focus on their strengths and contribute effectively to the group's learning goals."
    }
  ]
    
    return (
        <div>
            <Slide direction={'left'}><h2 className="text-2xl text-center mt-5 font-bold">
                Features of online Group study assignment
            </h2></Slide>
            <Slide direction={'right'}>            <p className="text-center font-extralight mt-3">The objective of this assignment is to deepen your understanding of environmental sustainability practices and their significance in various sectors. Through collaborative research and discussion, you will explore different aspects of sustainability and its implementation in real-world scenarios.</p></Slide>
            <div className="mt-20 grid lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 lg:space-y-10 space-y-5 lg:ml-4 md:ml-[200px]">
            {
                card.map(data => <Featurecard data={data}></Featurecard> )
            }
        </div>
        </div>
    );
};

export default Feature;