import MovingPart from "./MoveImg"
import './Main.css'
import React from 'react';
import oneImg from './img/1.png';
import twoImg from './img/2.png';
import threeImg from './img/3.png';
import fourImg from './img/4.png';
import fiveImg from './img/5.png';

function GetMoveImg() {
    const data = React.useRef([
        {
            src: fiveImg,
            name: "fiveImg",
            position: {
                left: 50,
                top: 49,
            },
            interval: 5,
            distanceX: 750,
            distanceY: 285,
            step: 200,
            index: 0,
            left: window.innerWidth - 1920,
            bottom: 150,
            firstCreation: true
        }
    ]);
    const [value, setValue] = React.useState(0);

    const DeleteErrorStar = (index) => {
        delete (data.current[index]);
        setValue(value + 1);
    }

    const GetMultiImg = (index, left, bottom) => {
        if (!data.current[index]) {
            delete (data.current[index]);
            setValue(value + 1);
            return;
        }
        let name = data.current[index].name;
        switch (name) {
            case "fiveImg": {
                for (let i = 0; i < 5; i++) {
                    data.current.push({
                        src: fourImg,
                        name: "fourImg",
                        position: {
                            left: 50,
                            top: 49,
                        },
                        interval: 4,
                        distanceX: 780,
                        distanceY: 310,
                        step: 200,
                        index: data.current.length,
                        left: left - 750,
                        bottom: bottom - 750 - (window.innerHeight - 969) / 2,
                        firstCreation: true
                    });
                }
                delete (data.current[index]);
                setValue(value + 1);
                break;
            }
            case "fourImg": {
                for (let i = 0; i < 5; i++) {
                    data.current.push({
                        src: threeImg,
                        name: "threeImg",
                        position: {
                            left: 50,
                            top: 49,
                        },
                        interval: 3,
                        distanceX: 810,
                        distanceY: 350,
                        step: 200,
                        index: data.current.length,
                        left: left - 770,
                        bottom: bottom - 720 - (window.innerHeight - 969) / 2,
                        firstCreation: true
                    });
                }
                delete (data.current[index]);
                setValue(value + 1);
                break;
            }
            case "threeImg": {
                for (let i = 0; i < 5; i++) {
                    data.current.push({
                        src: twoImg,
                        name: "twoImg",
                        position: {
                            left: 50,
                            top: 49,
                        },
                        interval: 2,
                        distanceX: 850,
                        distanceY: 380,
                        step: 200,
                        index: data.current.length,
                        left: left - 800,
                        bottom: bottom - 680 - (window.innerHeight - 969) / 2,
                        firstCreation: true
                    });
                }
                delete (data.current[index]);
                setValue(value + 1);
                break;
            }
            case "twoImg": {
                for (let i = 0; i < 5; i++) {
                    data.current.push({
                        src: oneImg,
                        name: "oneImg",
                        position: {
                            left: 50,
                            top: 49,
                        },
                        interval: 1,
                        distanceX: 900,
                        distanceY: 430,
                        step: 200,
                        index: data.current.length,
                        left: left - 840,
                        bottom: bottom - 640 - (window.innerHeight - 969) / 2,
                        firstCreation: true
                    });
                }
                delete (data.current[index]);
                setValue(value + 1);
                break;
            }
        }
    }

    return (
        <div className="container">
            <button onClick={() => {
                data.current = [
                    {
                        src: fiveImg,
                        name: "fiveImg",
                        position: {
                            left: 50,
                            top: 49,
                        },
                        interval: 5,
                        distanceX: 750,
                        distanceY: 285,
                        step: 200,
                        index: 0,
                        left: window.innerWidth - 1920,
                        bottom: 150,
                        firstCreation: true
                    }
                ];
                setValue(value + 1);
            }} className="buttonReset">Reset
            </button>
            {data.current.map((item) => {
                if (item !== undefined) {
                    return (
                        <div
                            className={item.name + "Size part"}
                            style={{
                                left: `${item.position.left}%`,
                                top: `${item.position.top}%`,
                                transform: "translate(-50%, -50%)",
                                textAlign: "center",
                            }}>
                            <MovingPart
                                getMultiImg={GetMultiImg}
                                interval={item.interval}
                                distanceX={item.distanceX}
                                distanceY={item.distanceY}
                                step={item.step}
                                name={item.name}
                                index={item.index}
                                left={item.left}
                                bottom={item.bottom}
                                deleteErrorStar={DeleteErrorStar}
                            >
                            </MovingPart>
                        </div>
                    )
                }
            })}
        </div>)

}

export default GetMoveImg