# Idol On Duty
Engine: Unreal Engine 5  
Version Control: Perforce  
Platform: Windows  
Published on: [DigiPen Game Gallery](https://games.digipen.edu/games/idol-on-duty), [Steam (Coming Soon)]()

## About the project and my roles:
This project was a beat-em-up style game where the player has the special skill to unleash *Metal Mode* and have more powerful attacks for a limited period of time. For this project I took ownership of different roles throughout the project:
- Technical Lead
- Gameplay Engineering Lead
- Art and Design Tools Engineer
- Production Support

Idol On Duty was one of the largest projects I've worked on, from early ideation to publishing I had to work in a variety of roles and learn to adapt in the fast-paced development cycle of a game. In this article I'll be talking about my experiences working with the different departments, showing pictures and videos of what I've done and more.

## Technical Lead
This was the first major scale Unreal Engine project I've worked on. Thankfully, I have gameplay engineering experience from previous projects, this made it easier to perform the leadership role when it came to planning the gameplay architecture. There were 3 major components to this project that required extra oversight when it came to developing these systems.

### The Perforce Setup
For this project, the team was provided a Perforce depot, however, we were not allowed to have more than 1 stream. This added risk to the overall project as breaking changes would permeate to the entire team. As the engineers on the team were most comfortable with best-practices in Git, there were a few additional requirements I had to place on the additions they were making to the game:
- All changes must be toggleable
- All features must be ActorComponents or removable with no major losses
- All additions must be tested and verified by 2 people in the local machine before submitting.

With those 3 guidelines a pipeline and expectation was set for ensuring the engineers on the team didn't block the QA, design, art and production work needed for the project.

In addition to thinking about the pipelines, I provided architectural support to my teammates when designing and implementing systems meant to be interfaced by the other departments.

###
