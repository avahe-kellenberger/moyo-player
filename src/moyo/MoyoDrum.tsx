import * as React from 'react'
import { DrumConfig } from './DrumConfig'
import './moyodrum.scss'

/**
 * Interactive Moyo Drum
 */
export default class MoyoDrum extends React.Component<{ drumConfig: DrumConfig }> {

    private mouseDown = (e: React.MouseEvent<HTMLImageElement, MouseEvent>): void => {
        const clickX = e.pageX - e.currentTarget.x
        const clickY = e.pageY - e.currentTarget.y
        this.props.drumConfig.tongues.some((tongue) => {
            if (tongue.polygon.contains(clickX, clickY)) {
                tongue.tone.play()
                return true
            }
            return false
        })
    }

    private drag = (e: React.MouseEvent<HTMLImageElement, MouseEvent>): boolean => {
        e.preventDefault()
        return false
    }

    public render() {
        return (
            <>
                <div className='drum-container'>{this.props.drumConfig.scaleName}</div>
                <img className='drum-img' src={this.props.drumConfig.imagePath} width={400} draggable={false} onMouseDown={this.mouseDown} onDragStart={this.drag} />
            </>
        )
    }
}
