import './MyLabel.css';

interface Props {
  /**
   * Text to display
   */
  label: string;
  /**
   * Label size
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3';
  /**
   * Capitalize text
   */
  allCaps?: boolean;
  /**
   * Capitalize text
   */
  color?: 'text-primary' | 'text-secondary' | 'text-tertiary';
  /**
   * Font color
   */
  fontColor?: string;
}

export const MyLabel = ({ label, size='normal', allCaps=true, color, fontColor }: Props) => {

  return (
    <span
          className={ `${ size } ${ color } label` }
          style={ { color: fontColor } }>
        { allCaps ? label.toUpperCase() : label }
    </span>
  )

};
