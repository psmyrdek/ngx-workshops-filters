# ngx-postings-filters

Demo library to use during Angular Workshops. See [angular-workshops](https://github.com/psmyrdek/angular-workshops)

## Install

`npm install ngx-postings-filters -SE`

## API

This basic library exports just one component - `PostingsFiltersComponent` with selector `lib-postings-filters`.

It emits three events you can listen on:
* filterPublic - filtering by public postings
* filterReallyOld - filtering by really old postings
* filterFilledJobDescription - filtering by postings with job description