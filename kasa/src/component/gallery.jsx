import React from 'react'
import { useState } from 'react'
import fleche from '../assets/arrow_back_ios-24px2.svg'

const Gallery = function gallery({ listImage }) {
      const [num, updateNum] = useState(0)
      const max = listImage.length

      return (
            <div className="annonce_gallery">
                  <div className={max > 1 ? 'active' : 'cachee'}>
                        <img
                              src={fleche}
                              alt="flèche défilement gauche"
                              className="annonce_gallery_flechegauche"
                              onClick={() =>
                                    num === 0
                                          ? updateNum(max - 1)
                                          : updateNum(num - 1)
                              }
                        />
                        <img
                              src={fleche}
                              alt="flèche défilement droite"
                              className="annonce_gallery_flechedroite"
                              onClick={() =>
                                    num < max - 1
                                          ? updateNum(num + 1)
                                          : updateNum(0)
                              }
                        />
                        <p className="annonce_gallery_numberImage">
                              {num + 1}/{max}
                        </p>
                  </div>
                  {listImage.map((image, index) => (
                        <div
                              key={`${image}-${index}`}
                              className={index === num ? 'active' : 'cachee'}
                        >
                              <img
                                    src={image}
                                    className="annonce_gallery_image"
                                    alt="Photo logement"
                              />
                        </div>
                  ))}
            </div>
      )
}

export default Gallery
