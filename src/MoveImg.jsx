import React from 'react';
import './MoveImg.css'

class MovingPart extends React.Component {
    constructor(props) {
        super(props);

        this.maxRotate = 60;
        this.deg = +(Math.random() * 360).toFixed();
        this.state = {
            x: props.left - window.innerWidth + 1920,
            y: props.bottom
        };
        if (props.name === "fiveImg") {
            this.clickText = "Click on me!";
        } else {
            this.clickText = undefined;
        }
    }

    componentDidMount() {
        const {step, interval, distanceX, distanceY, deleteErrorStar, index} = this.props;
        const {maxRotate, getShift} = this;
        setTimeout(() => {
            this.setState((prevState) => {
                let maxRotateF = maxRotate;
                let count = 0
                this.deg += +(Math.random() * maxRotateF * 2 - maxRotateF).toFixed();
                let shift = getShift(this.deg, step);
                while (Math.abs(prevState.x + shift.x) >= distanceX || Math.abs(prevState.y + shift.y) >= distanceY) {
                    this.deg += +(Math.random() * maxRotateF * 2 - maxRotateF).toFixed();
                    shift = getShift(this.deg, step);
                    if (maxRotateF < 180) {
                        maxRotateF += 20
                    }
                    if (count > 30) {
                        deleteErrorStar(index);
                        break;
                    }
                    count++
                }
                return {
                    x: prevState.x + shift.x,
                    y: prevState.y + shift.y,
                };
            });
        }, 10);
        setInterval(() => {
            this.setState((prevState) => {
                let maxRotateF = maxRotate;
                let count = 0
                this.deg += +(Math.random() * maxRotateF * 2 - maxRotateF).toFixed();
                let shift = getShift(this.deg, step);
                while (Math.abs(prevState.x + shift.x) >= distanceX || Math.abs(prevState.y + shift.y) >= distanceY) {
                    this.deg += +(Math.random() * maxRotateF * 2 - maxRotateF).toFixed();
                    shift = getShift(this.deg, step);
                    if (maxRotateF < 180) {
                        maxRotateF += 20
                    }
                    if (count > 30) {
                        deleteErrorStar(index);
                        break;
                    }
                    count++
                }
                return {
                    x: prevState.x + shift.x,
                    y: prevState.y + shift.y,
                };
            });
        }, interval * 1000);
    }

    getShift = (deg, step) => {
        return {
            x: +(Math.cos(deg * Math.PI / 180) * step).toFixed(),
            y: +(Math.sin(deg * Math.PI / 180) * step).toFixed(),
        };
    };

    render() {
        const {interval, name, getMultiImg, index} = this.props;
        const {x, y} = this.state;

        return (
            <div id={name + index} onClick={() => {
                let elem = document.getElementById(name + index);
                let coords = elem.getBoundingClientRect();
                let left = (document.documentElement.scrollWidth - 1920) / 2 + coords.left;
                let bottom = coords.bottom;
                getMultiImg(index, left, bottom);
            }} className={name + "Main"}
                 style={{
                     transform: `translate(${x}px,${y}px)`,
                     transition: `transform ${interval}s linear`,
                     backfaceVisibility: 'hidden',
                 }}>
                <p className="clickText">{this.clickText}</p>
            </div>
        );
    }
}

export default MovingPart;
