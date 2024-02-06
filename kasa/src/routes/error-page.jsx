import React from 'react'
import { NavLink } from 'react-router-dom'

function ErrorPage() {
      return (
            <main className="error-page">
                  <h1 className="error-page_title">404</h1>
                  <p className="error-page_text">
                        Oups! La page que vous demandez n'existe pas.
                  </p>
                  <p className="error-page_link">
                        <NavLink className="header_nav_link" to={`/`}>
                              Retourner sur la page d’accueil
                        </NavLink>
                  </p>
            </main>
      )
}

export default ErrorPage
