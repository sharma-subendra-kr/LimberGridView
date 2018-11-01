#!/bin/bash
#cat ./libs/limberGridView.css | while read -r LINE
#do
#echo -n "${LINE// /}"
#temp=`echo -n  "${LINE// /}"`
#echo $temp
#str="$str$temp"
#echo $LINE
#done
#echo $str
text=`cat ./libs/limberGridView.css`
#temp=`echo tr -d "\040\011\012\015" $text`
#temp2=`echo tr -d "[:space:]" $temp`
echo tr -d "\n\r\t" $text > limberGridView.min.css
