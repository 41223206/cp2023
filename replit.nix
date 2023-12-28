{ pkgs }: {
    deps = [
      pkgs.vim
      pkgs.openssh
      pkgs.pandoc
      pkgs.glibcLocales
      pkgs.gitFull
      pkgs.libev
      pkgs.gnuplot
      pkgs.ncurses.dev
      pkgs.gd
    ];
  env = {
    PYTHON_LD_LIBRARY_PATH = pkgs.lib.makeLibraryPath [
      pkgs.libev
    ];
  };
}