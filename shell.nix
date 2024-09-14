{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = with pkgs; [
    nodejs
    yarn
  ];

  shellHook = ''
    echo "React development environment loaded!"
    export PATH="$PWD/node_modules/.bin:$PATH"
  '';
}
