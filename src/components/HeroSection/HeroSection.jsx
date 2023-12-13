import React from 'react';
import SliderImg from '../../assets/sliderImg.png'
import Button from '../Button/Button';

const HeroSection = () => {
    return (
        <>
            <div style={{ width: '100%', height: '100vh' }}
                className='bg-gradient-to-r from-purple-600 to-indigo-800 items-center lg:flex lg:justify-around sm:block'
            >
                <div className='lg:w-1/2 sm:w-full px-20 pt-28 '>
                    <h1 className='h1 lg:text-5xl sm:text-[44px] font-black xs:text-base text-white my-4'>Beautiful Vibrant & <br></br>Modern Design</h1>
                    <p className='text-gray-100 sm:text-[19px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates accusantium Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, deleniti.  </p>
                    <Button btnText={'LEARN MORE'} className='mt-8' />
                </div>

                <div className='lg:w-1/2 sm:w-full h-full sm:ps-20 lg:pt-20 sm:pt-4 '>
                    <img src={SliderImg} className='w-[80%] mt-20' />
                </div>

            </div>
            <svg    id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stopColor="#3730a3"></stop><stop offset="95%" stopColor="#9333ea"></stop></linearGradient></defs><path d="M 0,400 C 0,400 0,100 0,100 C 20.42013801009542,112.2650766932008 40.84027602019084,124.53015338640158 64,121 C 87.15972397980916,117.46984661359842 113.059033929332,98.1444631475945 141,82 C 168.940966070668,65.8555368524055 198.9235882624812,52.891994023220434 224,65 C 249.0764117375188,77.10800597677957 269.2466130207433,114.28756075952376 289,122 C 308.7533869792567,129.71243924047624 328.0899596545454,107.9577629386845 348,106 C 367.9100403454546,104.0422370613155 388.39354836107475,121.88138748573822 419,123 C 449.60645163892525,124.11861251426178 490.3358469011556,108.51668711836258 513,90 C 535.6641530988444,71.48331288163742 540.2630640343029,50.05186404081145 562,63 C 583.7369359656971,75.94813595918855 622.6118969616324,123.2758567183916 648,135 C 673.3881030383676,146.7241432816084 685.2893481191678,122.84470908562214 710,114 C 734.7106518808322,105.15529091437786 772.2307105616964,111.34530693911984 800,101 C 827.7692894383036,90.65469306088016 845.7878096340468,63.774063157898524 869,66 C 892.2121903659532,68.22593684210148 920.6180509021171,99.55844042928607 943,105 C 965.3819490978829,110.44155957071393 981.739986757485,89.99217512495724 1007,88 C 1032.260013242515,86.00782487504276 1066.4220020679427,102.4728590708849 1089,106 C 1111.5779979320573,109.5271409291151 1122.5720049707445,100.11638859150322 1144,95 C 1165.4279950292555,89.88361140849678 1197.2899780490786,89.06158656310222 1223,89 C 1248.7100219509214,88.93841343689778 1268.2680828329403,89.63726515608785 1293,94 C 1317.7319171670597,98.36273484391215 1347.6376906191597,106.38935281254632 1373,108 C 1398.3623093808403,109.61064718745368 1419.18115469042,104.80532359372684 1440,100 C 1440,100 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.4" className="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stopColor="#3730a3"></stop><stop offset="95%" stopColor="#9333ea"></stop></linearGradient></defs><path d="M 0,400 C 0,400 0,200 0,200 C 23.823280713533144,196.53387274279427 47.64656142706629,193.06774548558855 72,198 C 96.35343857293371,202.93225451441145 121.23703500526798,216.26289080044006 148,221 C 174.76296499473202,225.73710919955994 203.40529855186168,221.8806913126511 229,215 C 254.59470144813832,208.1193086873489 277.1417707872854,198.21434394895547 297,198 C 316.8582292127146,197.78565605104453 334.0276182989968,207.26193289152695 358,202 C 381.9723817010032,196.73806710847305 412.7477560167272,176.73792448493666 440,171 C 467.2522439832728,165.26207551506334 490.98135763409425,173.78636916872637 516,179 C 541.0186423659057,184.21363083127363 567.3268134468959,186.11659884015788 588,185 C 608.6731865531041,183.88340115984212 623.711388578322,179.74723547064204 642,174 C 660.288611421678,168.25276452935796 681.827632239816,160.89445927727402 707,167 C 732.172367760184,173.10554072272598 760.978082462414,192.6749274202618 790,197 C 819.021917537586,201.3250725797382 848.2600379105281,190.40583104167877 873,196 C 897.7399620894719,201.59416895832123 917.9817658954732,223.7017484130231 939,221 C 960.0182341045268,218.2982515869769 981.8128985075793,190.78717530622885 1005,195 C 1028.1871014924207,199.21282469377115 1052.766640074209,235.14955036206155 1078,234 C 1103.233359925791,232.85044963793845 1129.120541195585,194.61462324552494 1154,176 C 1178.879458804415,157.38537675447506 1202.7511951434512,158.39195665583867 1225,169 C 1247.2488048565488,179.60804334416133 1267.8746782306093,199.81755013112038 1290,212 C 1312.1253217693907,224.18244986887962 1335.7500919341114,228.33784281967985 1361,225 C 1386.2499080658886,221.66215718032015 1413.1249540329443,210.83107859016008 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.53" className="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 200)"></path><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stopColor="#3730a3"></stop><stop offset="95%" stopColor="#9333ea"></stop></linearGradient></defs><path d="M 0,400 C 0,400 0,300 0,300 C 21.566008552597204,279.8370840092756 43.13201710519441,259.67416801855114 66,266 C 88.86798289480559,272.32583198144886 113.03794013181957,305.140411935071 138,318 C 162.96205986818043,330.859588064929 188.71622236752745,323.76418424116514 217,322 C 245.28377763247255,320.23581575883486 276.0971703980707,323.80285110026847 298,313 C 319.9028296019293,302.19714889973153 332.8950960401896,277.0244113577611 354,268 C 375.1049039598104,258.9755886422389 404.3224454411708,266.0995034686872 427,269 C 449.6775545588292,271.9004965313128 465.81512219512683,270.57757476749015 491,265 C 516.1848778048732,259.42242523250985 550.4170657783221,249.59019746135232 574,264 C 597.5829342216779,278.4098025386477 610.5166146915849,317.0616353871005 635,316 C 659.4833853084151,314.9383646128995 695.5164754553387,274.16326099024553 725,273 C 754.4835245446613,271.83673900975447 777.4174834870612,310.28532065191723 799,313 C 820.5825165129388,315.71467934808277 840.8135905964168,282.6954564020857 862,283 C 883.1864094035832,283.3045435979143 905.3281541272714,316.9328537397398 931,329 C 956.6718458727286,341.0671462602602 985.8737928944975,331.5731286389551 1010,324 C 1034.1262071055025,316.4268713610449 1053.1766742947386,310.7746317044399 1074,309 C 1094.8233257052614,307.2253682955601 1117.419509926548,309.3283445432854 1140,312 C 1162.580490073452,314.6716554567146 1185.1452859990695,317.91199012241833 1214,310 C 1242.8547140009305,302.08800987758167 1277.9993460771736,283.02369496704125 1306,278 C 1334.0006539228264,272.97630503295875 1354.8573296922361,281.9932300094168 1376,288 C 1397.1426703077639,294.0067699905832 1418.571335153882,297.00338499529164 1440,300 C 1440,300 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" className="transition-all duration-300 ease-in-out delay-150 path-2" transform="rotate(-180 720 200)"></path></svg>
        </>
    )
}

export default HeroSection
