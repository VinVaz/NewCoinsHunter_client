import * as React from 'react'

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logo from '../public/static/images/svg/logo-icon-word.svg'
 *
 */

// ==============================|| LOGO SVG ||============================== //

const MobileLogoItem = (props) => {
  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img
            alt="NewCoinsHunter"
            className={props.className}
            src={logo}
          />
    *
    */
    <svg
      width={props.width ? props.width : 50}
      viewBox="0 0 10.583 10.583"
      xmlns="http://www.w3.org/2000/svg"
      fill={props.color}
      {...props}
    >
      <path d="M1.72 7.133h1.7v1.7h-1.7zM1.72 1.643h1.7v1.7h-1.7zM7.21 1.643h1.7v1.7h-1.7zM7.21 7.133h1.7v1.7h-1.7z" />
      <path transform="rotate(45.001)" d="M6.612-.904h1.7v1.7h-1.7z" />
      <path
        transform="rotate(45)"
        d="M3.954-3.562h1.081v1.081H3.954zM10.055 2.538h1.081v1.081h-1.081zM9.95-3.623h1.081v1.081H9.95zM3.893 2.434h1.081v1.081H3.893z"
      />
    </svg>
  )
}

export default MobileLogoItem
