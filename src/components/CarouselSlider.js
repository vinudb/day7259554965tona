import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';
import { getImages } from '../apiCalls';

export default class CarouselSlider extends React.Component {

    state = {
        images: [],
        children: [],
        activeItemIndex: 0
    }

    componentDidMount() {
        getImages().then((images) => {
            this.setState({ images }, () => {
                this.setState({ children: this.createChildren(images.length) })
            })
        })
    }

    createChildren = (n) => range(n).map(i =>
        <div
            onClick={() => this.props.onImageClick(i + 1)}
            key={i}
            className='imageCarouselContainer'>
            <img src={this.state.images[0].url} className='imageCarousel' />
        </div>);

    changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

    render() {
        const {
            activeItemIndex,
            children,
        } = this.state;

        return (
            <div>
                <div className='titleContainer'>
                <h3 className='componentHeading fontHeadingColor'>Images</h3>
                </div>
                
                <div className='carousel'>
                    <ItemsCarousel
                        // Placeholder configurations
                        enablePlaceholder
                        numberOfPlaceholderItems={5}
                        minimumPlaceholderTime={1000}
                        placeholderItem={<div style={{ height: 200, background: 'gray' }}>Loading...</div>}

                        // Carousel configurations
                        numberOfCards={3}
                        gutter={12}
                        showSlither={true}
                        firstAndLastGutter={true}
                        freeScrolling={false}

                        // Active item configurations
                        requestToChangeActive={this.changeActiveItem}
                        activeItemIndex={activeItemIndex}
                        activePosition={'center'}

                        chevronWidth={24}
                        rightChevron={'>'}
                        leftChevron={'<'}
                        outsideChevron={false}
                    >
                        {children}
                    </ItemsCarousel>
                </div>
            </div>
        );
    }
} 