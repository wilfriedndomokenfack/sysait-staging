#!/bin/bash
set -xeu pipefail


function check_variable() {
  VARIABLE=$1
  if [[ -z "${1}" ]]; then
    echo "ERROR - Variable ${1} not set: please check repository settings"
    exit 1
  fi
}

function install_quasar_dependencies() {
  echo "INFO - install build dependency"
  yarn global add @quasar/cli

  echo "INFO - install dependency"
  yarn
}


function debug_listing_dist_dir() {
  echo "DEBUG - listing dist"
  ls -l ./
  ls -l dist/
  ls -l dist/spa/
}

function quasar_build() {
  echo "INFO - Quasar build ${DEPLOY_ENV} env"

  case ${DEPLOY_ENV} in
    "staging")
      export SYSAIT_API_HOST=${SYSAIT_API_HOST_STAGING}
      ;;
    "production")
      export SYSAIT_API_HOST=${SYSAIT_API_HOST_PROD}
      ;;
    *)
      echo "ERROR - deploy env ${DEPLOY_ENV} not defined elsewhere"
      exit 1
      ;;
  esac

  SYSAIT_API_HOST=${SYSAIT_API_HOST} \
  quasar build
}
