let Navbar = {
  render: async () => {
    let view =  /*html*/`
             <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="container">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="/#/">
                            Interview
                        </a>
                        <a class="navbar-item" href="#/participants/new">
                            Add participants
                        </a>
                        <a class="navbar-item" href="#/participants">
                          View Participants
                        </a>
                    </div>
                </div>
            </nav>
        `
    return view
  },
  after_render: async () => { }

}

export default Navbar;
