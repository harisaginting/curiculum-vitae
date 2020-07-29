import React, { useRef, useState, useEffect, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'

const Page1 = (props) => {
  const ref = useRef([])
  const [items, set] = useState([])
  const transitions = useTransition(items, null, {
    from: { opacity: 0, height: 0, innerHeight: 0, transform: 'perspective(600px) rotateX(0deg)', color: '#ff9900' },
    enter: [
      { opacity: 1, height: 90, innerHeight: 90 },
      { transform: 'perspective(600px) rotateX(0deg)' },
    ],
    leave: [{ color: '#909090' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    update: { color: '#1d59d5' },
  })

  const reset = useCallback(() => {
    ref.current.map(clearTimeout)
    ref.current = []
    set([])
    ref.current.push(setTimeout(() => set(['Hallo', 'Teman']), 500))
    ref.current.push(setTimeout(() => set(['Hallo']), 1000))
    ref.current.push(setTimeout(() => set(['Hallo', 'Nama Saya']), 2000))
    ref.current.push(setTimeout(() => set(['Hallo', 'Nama Saya','Harisa Ginting']), 2500))
  }, []);

  const reset2 = useCallback(() => {
    ref.current.map(clearTimeout)
    ref.current = []
    set([])
    ref.current.push(setTimeout(() => set(['Hallo', 'Teman']), 1500))
    ref.current.push(setTimeout(() => set(['Hallo']), 2000))
    ref.current.push(setTimeout(() => set(['Hallo', 'Nama Saya']), 3000))
    ref.current.push(setTimeout(() => set(['Hallo', 'Nama Saya','blablabla']), 3500))
  }, []);

  const clear = useCallback(() => {
    ref.current.map(clearTimeout)
    ref.current = []
    set([])
  }, []);

  useEffect(() => {
  	if(props.visibility === true){
  		void reset();
  	}else{
  		void clear();
  	}
  }, [props])

  return (
    <div className="homepage-1-container">
      {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
        <animated.div className="transitions-item-nama" key={key} style={rest} onClick={reset2}>
          <animated.div className={key === 8 ? "harisa" : key === 3 ? "teman" : ""} style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
        </animated.div>
      ))}
    </div>
  )
}

export default Page1;
