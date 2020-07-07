import { render } from 'react-dom'
import React, { useState, useEffect } from 'react'
import { useTransition, a } from 'react-spring'
import shuffle from 'lodash/shuffle'
import useMeasure from '../../helper/useMeasure'
import useMedia from '../../helper/useMedia'
import data from '../../helper/data'
import data2 from '../../helper/data2'

function Page3() {
  // Hook1: Tie media queries to the number of columns
  const columns = useMedia(['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)'], [5, 4, 3], 2)
  // Hook2: Measure the width of the container element
  const [bind, { width }] = useMeasure()
  // Hook3: Hold items
  const [items, set]      = useState(data)
  const [items2, set2]    = useState(data2)
  // Hook4: shuffle data every 2 seconds
  useEffect(() => void setInterval(() =>{set(shuffle);set2(shuffle);}, 5000), [])
  // Form a grid of stacked items using width & columns we got from hooks 1 & 2
  let heights   = new Array(columns).fill(0) // Each column gets a height starting with zero
  let gridItems = null;
  if (window.innerWidth >= 600){
    console.log("desktop view");
    gridItems =  items.map((child, i) => {
      const column = heights.indexOf(Math.min(...heights)) // Basic masonry-grid placing, puts tile into the smallest column using Math.min
      const xy = [(width / columns) * column, (heights[column] += child.height / 2) - child.height / 2] // X = container width / number of columns * column index, Y = it's just the height of the current column
      return { ...child, xy, width: width / columns, height: child.height / 2 }
    });
  }else{
    console.log("mobile view");
    gridItems =  items2.map((child, i) => {
      const column = heights.indexOf(Math.min(...heights)) // Basic masonry-grid placing, puts tile into the smallest column using Math.min
      const xy = [(width / columns) * column, (heights[column] += child.height / 2) - child.height / 2] // X = container width / number of columns * column index, Y = it's just the height of the current column
      return { ...child, xy, width: width / columns, height: child.height / 2 }
    });
  }
  // Hook5: Turn the static grid values into animated transitions, any addition, removal or change will be animated
  const transitions = useTransition(gridItems, item => item.css, {
    from: ({ xy, width, height }) => ({ xy, width, height, opacity: 0 }),
    enter: ({ xy, width, height }) => ({ xy, width, height, opacity: 1 }),
    update: ({ xy, width, height }) => ({ xy, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25
  })
  // Render the grid
  return (
    <div className="container-list-tech-stack">
      <div className="tech-stack-header text-center"><span className="tech-stack-title"><i>Techical Stack</i></span></div>
      <div {...bind} className="list-tech-stack" style={{ height: Math.max(...heights) }}>
        {transitions.map(({ item, props: { xy, ...rest }, key }) => (
          <a.div  key={key} style={{ transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`), ...rest }}>
            <div className={item.class} style={{ backgroundImage: item.css }} />
          </a.div>
        ))}
      </div>
    </div>
  )
}

export default Page3;
