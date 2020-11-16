import React, { Component } from 'react'

export default class Exp extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInTop">
               {/* <span className="heading-meta">highlights</span>*/}
                <h2 className="colorlib-heading animate-box">Experience</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-dot" />
                      </div>
                      <div className="timeline-label">
                        <h2>Core committee member at IEEE Computer Society <span>2020-Present</span></h2>
                        <p>Coordinator for Hackbattle</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-dot" />
                      </div>
                      <div className="timeline-label">
                        <h2>Member of Toastmaters International<span>2020-Present</span></h2>
                        <p>Treasurer -Part of Executive committee</p>
                      </div>
                    </div>
                  </article>
                 </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
