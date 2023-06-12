import LogoImage from '@/images/logo/sunflower-v3.jpg'
import Image from 'next/image'

export function Logo(props) {
  return (
    <Image
      src={LogoImage}
      width={400}
      height={400}
      alt="Seattle Birth Doulas"
      {...props}
    />
  )
}
