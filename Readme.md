To reproduce the error:
in folder haraka_2_7 start haraka:

    cd haraka_2_7
    node_modules/Haraka/bin/haraka -c .


run swaks with the outlook email:

    swaks -f mjb@migadu.com -t mjb@migadu.com -s localhost -p 2525 --data testOutlook.elm



then check the saved email:

    cat quarantine/20160526/XXX

At the bottom of the html part you find:

    =E1 =E9 =ED =F3 =FA =F1

which decoded is

    á é í ó ú ñ

Now in haraka 2.8

    cd haraka_2_8
    node_modules/Haraka/bin/haraka -c .


run swaks with the outlook email:

    swaks -f mjb@migadu.com -t mjb@migadu.com -s localhost -p 2525 --data testOutlook.elm



then check the saved email:

    cat quarantine/20160526/XXX

At the bottom you then find

    =EF=BF=BD =EF=BF=BD =EF=BF=BD =EF=BF=BD =EF=BF=BD =EF=BF=BD

which is decoded

    ï¿½ ï¿½ ï¿½ ï¿½ ï¿½ ï¿½
