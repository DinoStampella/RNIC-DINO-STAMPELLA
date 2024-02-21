import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import Svg, {SvgProps, Path} from 'react-native-svg';

const DeleteButton = (props: SvgProps) => (
  <TouchableOpacity>
    <Svg
      {...props}
      viewBox="0 0 24 24"
      width={props.width}
      height={props.height}>
      <Path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z" />
      <Path d="M9 10h2v8H9zm4 0h2v8h-2z" />
    </Svg>
  </TouchableOpacity>
);

export default DeleteButton;
