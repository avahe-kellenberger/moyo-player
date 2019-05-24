import * as React from 'react'
import { DrumConfig } from './DrumConfig'

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

    public render() {
        return (
            <>
                <div style={{ color: '#bbbbbb' }}>{this.props.drumConfig.scaleName}</div>
                <img src={this.props.drumConfig.imagePath} width={400} onMouseDown={this.mouseDown} draggable={false} />
            </>
        )
    }
}
