{ pkgs }: {
    deps = [
      pkgs.llvmPackages_rocm.clang
      pkgs.gd
      pkgs.gnuplot
    ];
}  
