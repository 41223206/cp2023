{ pkgs }: {
  deps = [
    pkgs.pandoc
    pkgs.glibcLocales
    pkgs.gitFull
    pkgs.imagemagick
    pkgs.libev
    pkgs.gnuplot
    pkgs.ncurses.dev
    pkgs.gd
    pkgs.freetype 
  ];
  env = {
    PYTHON_LD_LIBRARY_PATH = pkgs.lib.makeLibraryPath [
      pkgs.libev
    ];
  };
}