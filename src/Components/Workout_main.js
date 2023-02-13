import React from 'react'
// import './Workout_main_sectionStyle.css'
import Vdo_header from './Vdo_header'
import Workout_main_section from './Workout_main_section'
import wor_img from '../images/workout-25.jpg'

const Workout_main = () => {
  return (
    <div>
        <Vdo_header image={wor_img} text={'WEEKLY WORKOUTS FOR YOU'}/>
        
        <Workout_main_section image={'https://www.crossfit.com/wp-content/uploads/2023/02/01104827/230205-THUMB-CLEAN-768x432.jpg'} title={'Sunday 230205'} info={'Every 1:30 for 8 rounds, complete for quality:25-ft handstand wal'} title2={'Scaling:'} info2={'Practice being inverted and work toward virtuosity. Use the opportunity prior to today’s skill work to give some attention to your personal weaknesses. Read “Weakness Bias Training” for inspiration.'} title3={'Beginner Option:'} info3={'Every 1:30 for 8 rounds, complete for quality:0:30 handstand hold or 1:00 plank hold'}/> <hr className='wo-main-hr' style={{width:'90%', margin:'0 0 0 30px', color:'#333232'}}/>


        <Workout_main_section  image={'https://www.crossfit.com/wp-content/uploads/2023/02/03143801/ICE-BARREL-THUMB-01-768x432.jpg'} title={'Saturday 230204'} info={'Post thoughts to comments.'} title2={'Rest Day'}/> <hr className='wo-main-hr' style={{width:'90%', margin:'0 0 0 30px', color:'#333232'}}/>



        <Workout_main_section image={'https://www.crossfit.com/wp-content/uploads/2023/02/02171422/KATIE-HAYES-COACHING-THUMB-01-768x432.jpg'}  title={'Friday 230203'} info={'Complete as many rounds as possible in 18 minutes:18-calorie row12 push-ups6 dumbbell squat snatches, alternating♀ 40-lb DB ♂ 60-lb DBPost rounds completed to comments.'} title2={'Scaling:'} info2={'Watch The Dumbbell Squat Snatch and practice proper technique on the movement. Use a challenging weight for the workout that also allows you to maintain solid mechanics with minimal rest.'} title3={'Beginner Option:'} info3={'Complete as many rounds as possible in 18 minutes:18-calorie row12 assisted push-ups6 dumbbell power snatches + overhead squat, alternating ♀ 10-lb DB ♂ 15-lb DB'}/> <hr className='wo-main-hr' style={{width:'90%', margin:'0 0 0 30px', color:'#333232'}}/>


        <Workout_main_section image={'https://www.crossfit.com/wp-content/uploads/2023/02/31113505/230202-THUMB-CLEAN1-01-1-768x432.jpg'} title={'Thursday 230202'} info={'For time:10 front squats 5 rope climbs 10 front squats 4 rope climbs 10 front squats 3 rope climbs 10 front squats 2 rope climbs 10 front squats 1 rope climbs ♀ 125 lb ♂ 185 lb Post time to comments.'} title2={'Scaling:'} info2={'Reduce the load on the front squat and modify the rope climb in order to complete this workout in 15 minutes or less.'} title3={'Beginner Option:'} info3={'For time:10 front squats 5 rope climbs, lying to standing 10 front squats 4 rope climbs, lying to standing 10 front squats 3 rope climbs, lying to standing 10 front squats 2 rope climbs, lying to standing 10 front squats 1 rope climbs, lying to standing ♀ 45 lb ♂ 65 lb'}/> <hr className='wo-main-hr' style={{width:'90%', margin:'0 0 0 30px', color:'#333232'}}/>


        <Workout_main_section image={'https://www.crossfit.com/wp-content/uploads/2023/01/31080153/20210320094214_OPEN2021_FS2_0019-lowres-2-768x512.jpeg'} title={'Wednesday 230201'} info={'10 80-yard shuttle sprints Rest as needed between efforts. For each sprint, run 10 yards out, 10 back, 20 out, 20 back, 10 out, 10 back. Post best and worst times to comments. Compare to 160914.'} title2={'Scaling:'} info2={'Warm up appropriately before beginning these shuttle repeats. Spend roughly 10 minutes on a general warm-up, followed by 10-15 minutes on sprint-specific warm-up drills. Each sprint should be a max effort. Beginner-level athletes should reduce the number of rounds. Intermediate athletes can do this workout as prescribed.'} title3={'Beginner Option:'} info3={'5 80-yard shuttle runs Rest as needed between efforts. 5 80-yard shuttle runs Rest as needed between efforts.For each sprint, run 10 yards out, 10 back, 20 out, 20 back, 10 out, 10 back.For each sprint, run 10 yards out, 10 back, 20 out, 20 back, 10 out, 10 back.'}/> <hr className='wo-main-hr' style={{width:'90%', margin:'0 0 0 30px', color:'#333232'}}/>


        <Workout_main_section image={'https://www.crossfit.com/wp-content/uploads/2023/01/30074904/Power-CrossFit_Coach_th-768x432.jpeg'} title={'Tuesday 230131'} info={'Post thoughts to comments.'} title2={'Rest Day'} /> <hr className='wo-main-hr' style={{width:'90%', margin:'0 0 0 30px', color:'#333232'}}/>


        <Workout_main_section image={'https://www.crossfit.com/wp-content/uploads/2023/01/27111434/230130-THUMB-CLEAN-01-768x432.jpg'} title={'Monday 230130'} info={'21-15-9-6 reps for time of: Bike calories Handstand push-ups Post time to comments.'} title2={'Scaling:'} info2={'Sprint the bike and choose modifications on the handstand push-ups that allow for big sets and minimal rest.'} title3={'Beginner Option:'} info3={'15-9-6 reps for time of:Bike caloriesn Push-ups'}/> <hr className='wo-main-hr' style={{width:'90%', margin:'0 0 0 30px', color:'#333232'}}/>
    </div>
  )
}

export default Workout_main
