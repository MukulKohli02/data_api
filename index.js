const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
const data =
    {
        "Development" : [
            {
                "id" : "WD101",
                "title" : "Web Development Fundamentals",
                "description" : "Web development fundamentals encompass a set of essential concepts and skills that serve as the cornerstone for creating and maintaining websites and web applications. At the core of these fundamentals lie HTML, the markup language defining the structure of web content, CSS, which styles and formats HTML documents, and JavaScript, enabling dynamic and interactive features on the client side. Responsive design ensures adaptability to various devices, while version control systems like Git facilitate collaborative development and code management.",
                "image" : {
                    "url" : "https://res.cloudinary.com/boardinfinity/image/upload/t_blog_img/bi-websites/blog/11/62.png",
                    "alt" : "Web Development Fundamentals"
                }
            },
            {
                "id" : "DS201",
                "title" : "Data Science Essentials",
                "description" : "Data Science Essentials encapsulate the fundamental concepts, methodologies, and tools essential for extracting meaningful insights and knowledge from data. This interdisciplinary field combines statistical analysis, machine learning, and domain expertise to interpret complex datasets. The process typically involves data collection, cleaning, exploration, and modeling. Programming languages like Python and R, along with libraries such as Pandas, NumPy, and scikit-learn, are crucial tools for implementing data science workflows. Statistical techniques aid in drawing inferences and making predictions, while machine learning algorithms enable the creation of models for classification, regression, and clustering. Data visualization is a key aspect, employing tools like Matplotlib and Seaborn to communicate findings effectively.",
                "image" : {
                    "url" : "https://science.cmb.ac.lk/wp-content/uploads/2022/12/stat.jpg",
                    "alt" : "Data Science Essentials"
                }
            },
            {
                "id" : "SW301",
                "title" : "Software Testing Fundamentals",
                "description" : "Software Testing Fundamentals form the bedrock of ensuring the quality, reliability, and functionality of software applications. This discipline involves systematically assessing software to identify defects, verify that it meets specified requirements, and ensure its overall robustness. Testers employ various methodologies, such as manual testing and automated testing, to scrutinize software for errors, bugs, and performance issues. Test cases, plans, and scripts are developed to guide the testing process, and these may encompass functional, non-functional, and regression testing.",
                "image" : {
                    "url" : "https://artoftesting.com/wp-content/uploads/2020/11/software-testing-training.jpg",
                    "alt" : "Software Testing Fundamentals"
                }
            },
        ],
        "Bussiness" : [
            {
                "id" : "MK101",
                "title" : "Introduction to Marketing",
                "description" : "Marketing is a dynamic and multifaceted discipline that revolves around the strategic activities involved in promoting and selling products or services to a target audience. At its core, marketing is about understanding customer needs and preferences, creating value propositions, and communicating effectively to build awareness and drive engagement. It encompasses a broad range of activities, from market research and product development to advertising, branding, and customer relationship management.",
                "image" : {
                    "url" : "https://divimode.com/wp-content/uploads/2023/11/IntroductionToDigitalMarketing.png",
                    "alt" : "Introduction to marketing"
                }
            },
            {
                "id" : "LD401",
                "title" : "Leadership Development",
                "description" : "Leadership development is a comprehensive and ongoing process aimed at cultivating the skills, qualities, and behaviors necessary for individuals to effectively lead and inspire others. It encompasses a diverse set of activities, strategies, and programs designed to identify and nurture leadership potential within individuals at various levels of an organization. Leadership development involves fostering self-awareness, emotional intelligence, and strategic thinking, while also emphasizing effective communication, decision-making, and conflict resolution skills. It extends beyond traditional hierarchical structures, recognizing that leadership can emerge at all levels and in various forms.",
                "image" : {
                    "url" : "https://eassets.mosaicdigital.com/uploads/2023/02/MarshallGoldsmithMob.jpg",
                    "alt" : "Leadership Development"
                }
            },
            {
                "id" : "PM501",
                "titile" : "Project Management Essentials",
                "description" : "Project Management Essentials encompass the fundamental principles, processes, and tools essential for efficiently planning, executing, and completing projects. At its core, project management involves defining project objectives, breaking down tasks, allocating resources, and establishing timelines to ensure successful outcomes. Key components include project initiation, planning, execution, monitoring and controlling, and closure. Project managers play a central role in coordinating team efforts, managing risks, and adapting to changes in scope or requirements. Tools such as Gantt charts, project management software, and collaboration platforms aid in organizing tasks and facilitating communication within project teams.",
                "image" : {
                    "url" : "https://www.aim.com.au/sites/default/files/00960_AIM_Screens_ProjectManagementEssentialsVirtual_0.jpg",
                    "alt" : "Project Management Essentials"
                }
            }
        ],
        "Design" : [
            {
                "id" : "GD601",
                "title" : "Graphic Design Fundamentals",
                "description" : "Graphic design fundamentals form the essential building blocks that underpin the creation of visually compelling and communicative designs. This discipline involves a combination of artistic principles, visual hierarchy, and technical skills to convey messages effectively. Typography, color theory, and layout are key components that designers manipulate to create aesthetically pleasing and impactful compositions. Understanding the principles of balance, contrast, and alignment is crucial for creating harmonious and visually engaging designs. Graphic designers utilize various software tools, such as Adobe Creative Suite, to bring their creative visions to life.",
                "image" : {
                    "url" : "https://i.ytimg.com/vi/ohVnfIG0ZiU/maxresdefault.jpg",
                    "alt" : "Graphic Design Fundamentals"
                }
            },
            {
                "id" : "UD505",
                "title" : "User Experience Design",
                "description" : "User Experience (UX) Design is a multidisciplinary approach focused on enhancing the overall interaction between users and a product or system. At its core, UX design aims to create intuitive, meaningful, and enjoyable experiences for users by considering their needs, behaviors, and preferences. This process involves various stages, including user research, persona development, information architecture, wireframing, prototyping, and usability testing. Designers work to understand the user's journey, ensuring that every touchpoint, from the first interaction to the final task completion, is seamless and user-friendly.",
                "image" : {
                    "url" : "https://miro.medium.com/v2/resize:fit:1200/1*NJttauNgdiCmPkIyqXFlVw.jpeg",
                    "alt" : "User Experience Design"
                }
            },
            {
                "id" : "FD701",
                "title" : "Fashion Design Principles",
                "description" : "Fashion Design Principles serve as the fundamental guidelines and concepts that underpin the creation of aesthetically pleasing and functional clothing and accessories. These principles encompass a range of elements, including color theory, silhouette, proportion, balance, and texture. Designers utilize these principles to express their artistic vision while ensuring that the garments are not only visually appealing but also practical and comfortable to wear. Understanding the principles of design allows fashion designers to create harmonious compositions, whether it be in the choice of fabric, the arrangement of patterns, or the overall structure of a garment.",
                "image" : {
                    "url" : "https://i.ytimg.com/vi/YxeFR0ToXhM/sddefault.jpg",
                    "alt" : "Fashion Design Principles"
                }
            }
        ],
        "Lifestyle" : [
            {
                "id" : "CB801",
                "title" : "Cooking Basics",
                "description" : "Cooking basics constitute the foundational knowledge and skills necessary for anyone venturing into the culinary realm. At its essence, cooking involves the understanding and application of fundamental techniques, such as chopping, sautéing, boiling, and baking. Mastery of basic knife skills is paramount, as it not only expedites food preparation but also ensures safety in the kitchen. Familiarity with various cooking methods, from simmering to roasting, provides versatility in crafting a wide array of dishes. Additionally, knowledge of flavor profiles, seasoning, and ingredient pairings contributes to the creation of well-balanced and delicious meals.",
                "image" : {
                    "url" : "https://www.loveandlemons.com/wp-content/themes/loveandlemons5/widgets/subscribe/meal-plan-pics.jpg",
                    "alt" : "Cooking Basics"
                }
            },
            {
                "id" : "FL901",
                "title" : "Fitness of Life",
                "description" : "Fitness of life is a holistic concept that emphasizes the integration of physical, mental, and emotional well-being into one's lifestyle. It goes beyond conventional notions of fitness solely related to physical exercise and encompasses a comprehensive approach to health. This involves maintaining a balanced diet, engaging in regular physical activity, managing stress, fostering positive mental health, and cultivating healthy relationships. The term underscores the idea that fitness is not just a goal to achieve but an ongoing, dynamic process of adopting habits that contribute to a fulfilling and sustainable life.",
                "image" : {
                    "url" : "https://img.freepik.com/free-vector/fitness-concept-illustration_1284-61329.jpg",
                    "alt" : "Fitness of Life"
                }
            },
            {
                "id" : "TP702",
                "title" : "Travel Photography",
                "description" : "Travel photography is a captivating and dynamic genre that captures the essence of diverse cultures, landscapes, and experiences around the world. At its core, it involves the art of storytelling through visually compelling images that transport viewers to different corners of the globe. Travel photographers navigate a range of challenges, from adapting to changing light conditions to capturing authentic moments that reflect the spirit of a place. Composition, framing, and a keen eye for details are crucial skills, allowing photographers to convey the unique beauty and cultural richness of their surroundings. Whether capturing iconic landmarks, candid street scenes, or the natural wonders of a destination, travel photography goes beyond mere documentation, aiming to evoke emotions and inspire a sense of wanderlust.",
                "image" : {
                    "url" : "https://i.ytimg.com/vi/G5PQEuRQQB4/hqdefault.jpg",
                    "alt" : "Travel Photography"
                }
            }
        ]
    }


app.get('/',(req,res)=>{
    res.send({
        data:data
    })
})

app.listen(4000, (err)=>{
    if(err){
        console.log('Error in Server');
    }else {
        console.log('Server connected')
    }
})
