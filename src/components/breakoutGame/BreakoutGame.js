import React, { useReducer, useEffect } from "react";
import styled from "styled-components";
import { getGameState, getNewGameState, MOVEMENT } from "./game";
import { registerListener } from "./game/utils";

const MOVEMENT_KEYS = {
  LEFT: [65, 37],
  RIGHT: [68, 39]
};

const STOP_KEY = 32;

const UPDATE_EVERY = 1000 / 60;

const Circle = ({ x, y, radius, ...rest }) => (
  <circle {...rest} cx={x} cy={y} r={radius} />
);

const GameContainer = styled.div`
  /* margin: 1rem 0; */
`;
const Scene = styled.svg`
  display: block;
  margin: auto;
`;
const Ball = styled(Circle)`
  fill: ${({ theme }) => theme.color.primary};
`;
const Paddle = styled.rect`
  fill: ${({ theme }) => theme.color.primary};
`;
const Block = styled.rect`
  fill: ${({ theme }) => theme.color.primary};
  stroke-width: 1px;
  stroke: ${({ theme }) => theme.color.primaryDark};
`;

const getProjectors = (containerSize, gameSize) => {
  const widthRatio = containerSize.width / gameSize.width;
  const heightRatio = containerSize.height / gameSize.height;
  const unitOnScreen = Math.min(widthRatio, heightRatio);

  return {
    scaleDistance: distance => distance * unitOnScreen,
    scaleVector: vector => vector.scaleBy(unitOnScreen)
  };
};

const getInitialState = containerSize => {
  const game = getGameState();
  const { scaleDistance, scaleVector } = getProjectors(
    containerSize,
    game.size
  );
  return {
    game,
    containerSize,
    scaleDistance,
    scaleVector,
    time: Date.now(),
    stopTime: undefined,
    movement: undefined
  };
};

const ACTION = {
  KEY_DOWN: "KEY_DOWN",
  KEY_UP: "KEY_UP",
  TICK: "TICK"
};

const HANDLER = {
  [ACTION.KEY_DOWN]: (state, key) => {
    if (MOVEMENT_KEYS.LEFT.includes(key)) {
      return { ...state, movement: MOVEMENT.LEFT };
    }
    if (MOVEMENT_KEYS.RIGHT.includes(key)) {
      return { ...state, movement: MOVEMENT.RIGHT };
    }
    return state;
  },
  [ACTION.KEY_UP]: (state, key) => {
    const newState = { ...state, movement: undefined };
    if (key === STOP_KEY) {
      if (state.stopTime) {
        return {
          ...newState,
          stopTime: undefined,
          time: state.time + Date.now() - state.stopTime
        };
      }
      return { ...newState, stopTime: Date.now() };
    }
    return newState;
  },
  [ACTION.TICK]: state => {
    if (state.stopTime) return state;

    const time = Date.now();
    const newGame = getNewGameState(
      state.game,
      state.movement,
      time - state.time
    );
    const newState = { ...state, time };
    if (newGame.lives < 1) {
      return { ...newState, game: getGameState() };
    }
    if (newGame.blocks.length < 1) {
      const game = getGameState();
      return {
        ...newState,
        game,
        ...getProjectors(state.containerSize, game.size)
      };
    }
    return { ...newState, game: newGame };
  }
};

const reducer = (state, { type, payload }) => {
  const handler = HANDLER[type];
  if (!handler) return state;
  return handler(state, payload);
};

const BreakoutGame = sizeProps => {
  const [state, dispatch] = useReducer(reducer, sizeProps, getInitialState);
  const act = (type, payload) => dispatch({ type, payload });
  const {
    scaleDistance,
    scaleVector,
    game: {
      blocks,
      paddle,
      ball,
      size: { width, height },
      lives
    }
  } = state;
  const viewWidth = scaleDistance(width);
  const unit = scaleDistance(ball.radius);

  useEffect(() => {
    const onKeyDown = ({ which }) => act(ACTION.KEY_DOWN, which);
    const onKeyUp = ({ which }) => act(ACTION.KEY_UP, which);
    const tick = () => act(ACTION.TICK);

    const timerId = setInterval(tick, UPDATE_EVERY);
    const unregisterKeydown = registerListener("keydown", onKeyDown);
    const unregisterKeyup = registerListener("keyup", onKeyUp);
    return () => {
      clearInterval(timerId);
      unregisterKeydown();
      unregisterKeyup();
    };
  }, []);

  return (
    <GameContainer>
      <Scene width={viewWidth} height={scaleDistance(height)}>
        {blocks.map(({ position, ...block }) => (
          <Block
            key={`${position.x}-${position.y}`}
            width={scaleDistance(block.width)}
            height={scaleDistance(block.height)}
            {...scaleVector(position)}
          />
        ))}
        <Paddle
          width={scaleDistance(paddle.width)}
          height={scaleDistance(paddle.height)}
          {...scaleVector(paddle.position)}
        />
        <Ball {...scaleVector(ball.center)} radius={unit} />
      </Scene>
    </GameContainer>
  );
};

export default BreakoutGame;
