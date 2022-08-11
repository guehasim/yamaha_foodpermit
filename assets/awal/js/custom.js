$(function () {
  $.ajaxSetup({
    beforeSend: function (jqXHR, Obj) {
      var value = '; ' + document.cookie;
      var parts = value.split('; blp_cookie=');
      if (parts.length == 2) {
        if (Obj.data != undefined) {
          Obj.data += '&blp_token=' + parts.pop().split(';').shift();
        } else {
          Obj.data = 'blp_token=' + parts.pop().split(';').shift();
        }
      }
    },
  });
});

$(document).ready(function () {
  // if($(".select2").length > 0) {
  //     $('.select2').select2();
  // }

  if ($('.monthPicker').length > 0) {
    $('.monthPicker').MonthPicker({ Button: false });
  }

  if ($('#products-sales').length > 0) {
    if (window.prodsale != '') {
      var months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];
      Morris.Area({
        element: 'products-sales',
        data: JSON.parse(window.prodsale),
        xkey: 'month',
        ykeys: ['shipping'],
        labels: ['Shipping'],
        xLabelFormat: function (x) {
          // <--- x.getMonth() returns valid index
          var month = months[x.getMonth()];
          return month;
        },
        dateFormat: function (x) {
          var month = months[new Date(x).getMonth()];
          return month;
        },
        behaveLikeLine: true,
        resize: true,
        pointSize: 0,
        pointStrokeColors: ['#0bb2d4'],
        smooth: true,
        gridLineColor: '#E4E7ED',
        numLines: 6,
        gridtextSize: 14,
        lineWidth: 0,
        fillOpacity: 0.9,
        hideHover: 'auto',
        lineColors: ['#0bb2d4'],
      });

      Morris.Bar.prototype.fillForSeries = function (i) {
        var color;
        return '0-#fff-#f00:20-#000';
      };
    }
  }

  $(document).on('click', '.modalprofile', function (e) {
    $.each($('#modal-profile').find('input[type=text]'), function (idx, val) {
      $(this).val($(this).attr('data-input'));
    });

    $('#modal-profile').modal('show');
  });

  if ($('.money').length > 0) {
    $('.money').number(true);
  }

  if ($('.moneyfloat').length > 0) {
    $('.moneyfloat').number(true, 2);
  }

  $(document).on('change keydown keyup', '.searchcustomer', function () {
    if ($('.searchcustomer').val() == '') {
      $('.' + $(this).attr('data-name')).val('');
      $('.' + $(this).attr('data-id')).val('');
    }
  });

  window.alltable = {};

  if ($('.table').length > 0) {
    $.each($('.table'), function (idx, val) {
      if (
        $(this).data('content') != '' &&
        typeof $(this).data('content') != 'undefined'
      ) {
        createTable($(this));
      }
    });
  }

  String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
  };

  function createTable(tabledata, showDefaultPage = 10) {
    var columnod = [];
    var columnsort = [];
    var harga = [];
    var tglupdate = [];
    var statusstage = [];
    var monthNamesod = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec',
    ];
    var statustask = [];
    var stokloadingstatus = [];
    var loadingstatidx = [];
    var statusmuatidx = [];
    var statuscmidx = [];
    var cargokotaidx = [];

    var colnumberidx = [];
    var statinvidx = [];
    var statbayaridx = [];
    var statactiveidx = [];
    var terjualidx = [];
    var statpaymentidx = [];
    var statusjualidx = [];
    var pembayarandepoidx = [];
    var listconcatidx = [];

    var url = tabledata.data('content').split('/');
    var tabledata = tabledata;
    var listtanggal = [
      'tglStage',
      'tglbiaya',
      'tgltempoinv',
      'dueDate',
      'tglin',
      'tglBayar',
      'tglstok',
      'createat',
      'createdat',
      'tglberangkat',
      'tgltiba',
      'tglpakai',
      'tglinv',
      'tglbayar',
      'tglakhirkontrak',
      'tglactive',
      'tgladd',
      'tgljual',
    ];
    var stokloading = ['loadinglist'];
    var listconcat = ['listinv'];
    var loadingstat = ['statusloading'];
    var statusmuat = ['statusmuat'];
    var statuscm = ['statuscm'];
    var cargokota = ['cargokota'];
    var statbayar = ['statbayar'];
    var terjual = ['terjual'];
    var statactive = ['statusactive'];
    var statpayment = ['statpayment'];
    var statusjual = ['statusjual'];
    var pembayarandepo = ['pembayarandepo'];
    var colnumber = [
      'totalsisa',
      'belilifton',
      'beliliftoff',
      'sisapiutang',
      'totaljual',
      'hargainvppn',
      'hargainv',
      'totaljualfinal',
      'hargappn10',
      'hargapph23',
      'hargabeli',
      'totallabarugi',
      'biayabeliliftondepo',
      'biayabeliliftoffdepo',
      'belilain',
      'hargabelikereta',
      'ppn10',
      'ppn10jual',
      'lebihbayar',
      'totalbeforepph',
      'hargaseal',
      'totalpiutang',
      'totalfinaljual',
      'totalinv',
      'totalbayartunai',
      'totalppn',
      'ppn10',
      'pph23',
      'totalbiaya',
      'dibayar',
      'piutang',
      'labarugi',
      'totalbeli',
      'L20E',
      'L21E',
      'L40E',
      'L40HCE',
      'LD20E',
      'LD21E',
      'LD40E',
      'LD40HCE',
      'L20F',
      'L21F',
      'L40F',
      'L40HCF',
      'LD20F',
      'LD21F',
      'LD40F',
      'LD40HCF',
      'D20E',
      'D21E',
      'D40E',
      'D40HCE',
      'D20F',
      'D21F',
      'D40F',
      'D40HCF',
      'K20R',
      'K21R',
      'K40R',
      'K40HCR',
      'K20SF',
      'K20SR',
      'K21SF',
      'K21SR',
      'K40SF',
      'K40SR',
      'K40HCSF',
      'K40HCSR',
      'KA20SS',
      'KA21SS',
      'KA40SS',
      'KA40HCSS',
      'KA20SD',
      'KA21SD',
      'KA40SD',
      'KA40HCSD',
      'KA20DS',
      'KA21DS',
      'KA40DS',
      'KA40HCDS',
      'KA20DD',
      'KA21DD',
      'KA40DD',
      'KA40HCDD',
      'S20',
      'S21',
      'S40',
      'S40HC',
      'totalinv',
      'totalbayar',
      'totalfinal',
      'total',
      'belilain',
      'totalkuli',
      'hargarc',
      'hargadoorasal',
      'hargadoortujuan',
      'materai',
      'totallolo',
      'ppntarif',
      'tarifkabox',
      'tarifkateus',
      'totalinvoiceppn',
      'buruhforklift',
      'totaldpp',
      'totalinvoiceppn',
    ];
    var statinv = ['statusinv'];

    $.each(tabledata.find('thead > tr > th'), function (idx, val) {
      var obj = {};
      obj.data = $(this).data('titletb');
      obj.orderable = $(this).data('sort') ? true : false;

      if ($(this).data('sort')) {
        columnsort.push([idx, $(this).data('sort')]);
      }

      if ($(this).data('titletb') == 'totaljasa') {
        harga.push(idx);
      }

      if (stokloading.includes($(this).data('titletb'))) {
        stokloadingstatus.push(idx);
      }

      if (pembayarandepo.includes($(this).data('titletb'))) {
        pembayarandepoidx.push(idx);
      }

      if (statusjual.includes($(this).data('titletb'))) {
        statusjualidx.push(idx);
      }

      if (statpayment.includes($(this).data('titletb'))) {
        statpaymentidx.push(idx);
      }

      if (terjual.includes($(this).data('titletb'))) {
        terjualidx.push(idx);
      }

      if (statactive.includes($(this).data('titletb'))) {
        statactiveidx.push(idx);
      }

      if (statbayar.includes($(this).data('titletb'))) {
        statbayaridx.push(idx);
      }

      if (statinv.includes($(this).data('titletb'))) {
        statinvidx.push(idx);
      }

      if (colnumber.includes($(this).data('titletb'))) {
        colnumberidx.push(idx);
      }

      if (statuscm.includes($(this).data('titletb'))) {
        statuscmidx.push(idx);
      }

      if (cargokota.includes($(this).data('titletb'))) {
        cargokotaidx.push(idx);
      }

      if (loadingstat.includes($(this).data('titletb'))) {
        loadingstatidx.push(idx);
      }

      if (statusmuat.includes($(this).data('titletb'))) {
        statusmuatidx.push(idx);
      }

      if (listtanggal.includes($(this).data('titletb'))) {
        tglupdate.push(idx);
      }

      if (listconcat.includes($(this).data('titletb'))) {
        listconcatidx.push(idx);
      }

      if ($(this).data('titletb') == 'statusStage') {
        statusstage.push(idx);
      }

      if ($(this).data('titletb') == 'statustask') {
        statustask.push(idx);
      }

      columnod.push(obj);
    });

    var tableName = tabledata.attr('id');
    var thistable = tabledata;
    var lastdate = [];

    var footCheck = tabledata.find('tfoot').length;
    window.alltable[tableName] = thistable.DataTable({
      responsive: false,
      searchDelay: 1000,
      language: {
        searchPlaceholder: 'Search...',
        sSearch: '',
        lengthMenu: '_MENU_ items/page',
        processing: 'Please wait ...',
      },
      iDisplayLength: showDefaultPage,
      // "sPaginationType": "input",
      processing: true,
      sDom: '<lfp<"loadingtable"r>tip>',
      serverSide: true,
      bSort: true,
      sAjaxSource: siteUrl + tabledata.data('content'),
      order: columnsort,
      aoColumns: columnod,
      footerCallback: function (row, data, start, end, display) {
        if (footCheck > 0) {
          var api = this.api(),
            data;

          // Remove the formatting to get integer data for summation
          var intVal = function (i) {
            return typeof i === 'string'
              ? i.replace(/[\$,]/g, '') * 1
              : typeof i === 'number'
              ? i
              : 0;
          };

          if (tabledata.attr('id') == 'tablelabarugi') {
            var loopfoot = [4, 5, 6, 7, 8];
            for (var idx in loopfoot) {
              total = api
                .column(loopfoot[idx])
                .data()
                .reduce(function (a, b) {
                  return intVal(a) + intVal(b);
                }, 0);

              // Total over this page
              pageTotal = api
                .column(loopfoot[idx], { page: 'current' })
                .data()
                .reduce(function (a, b) {
                  return intVal(a) + intVal(b);
                }, 0);

              $(api.column(loopfoot[idx]).footer()).html(total).number(true, 2);

              $(api.column(loopfoot[idx]).footer()).number(true, 2);
            }
          }

          if (tabledata.attr('id') == 'reportinvoice') {
            var loopfoot = [7, 8, 9];
            for (var idx in loopfoot) {
              total = api
                .column(loopfoot[idx])
                .data()
                .reduce(function (a, b) {
                  return intVal(a) + intVal(b);
                }, 0);

              // Total over this page
              pageTotal = api
                .column(loopfoot[idx], { page: 'current' })
                .data()
                .reduce(function (a, b) {
                  return intVal(a) + intVal(b);
                }, 0);

              $(api.column(loopfoot[idx]).footer()).html(total).number(true, 2);

              $(api.column(loopfoot[idx]).footer()).number(true, 2);
            }
          }

          if (tabledata.attr('id') == 'reportinvoicepph') {
            var loopfoot = [7, 8, 9, 10, 11];
            for (var idx in loopfoot) {
              total = api
                .column(loopfoot[idx])
                .data()
                .reduce(function (a, b) {
                  return intVal(a) + intVal(b);
                }, 0);

              // Total over this page
              pageTotal = api
                .column(loopfoot[idx], { page: 'current' })
                .data()
                .reduce(function (a, b) {
                  return intVal(a) + intVal(b);
                }, 0);

              $(api.column(loopfoot[idx]).footer()).html(total).number(true, 2);

              $(api.column(loopfoot[idx]).footer()).number(true, 2);
            }
          }

          if (tabledata.attr('id') == 'reportbiayabeli') {
            var loopfoot = [6];
            for (var idx in loopfoot) {
              total = api
                .column(loopfoot[idx])
                .data()
                .reduce(function (a, b) {
                  return intVal(a) + intVal(b);
                }, 0);

              // Total over this page
              pageTotal = api
                .column(loopfoot[idx], { page: 'current' })
                .data()
                .reduce(function (a, b) {
                  return intVal(a) + intVal(b);
                }, 0);

              $(api.column(loopfoot[idx]).footer()).html(total).number(true, 2);

              $(api.column(loopfoot[idx]).footer()).number(true, 2);
            }
          }

          if (tabledata.attr('id') == 'reportbiayajual') {
            var loopfoot = [6];
            for (var idx in loopfoot) {
              total = api
                .column(loopfoot[idx])
                .data()
                .reduce(function (a, b) {
                  return intVal(a) + intVal(b);
                }, 0);

              // Total over this page
              pageTotal = api
                .column(loopfoot[idx], { page: 'current' })
                .data()
                .reduce(function (a, b) {
                  return intVal(a) + intVal(b);
                }, 0);

              $(api.column(loopfoot[idx]).footer()).html(total).number(true, 2);

              $(api.column(loopfoot[idx]).footer()).number(true, 2);
            }
          }

          if (tabledata.attr('id') == 'reportbelivendor') {
            var loopfoot = [4, 5, 6, 7];
            for (var idx in loopfoot) {
              total = api
                .column(loopfoot[idx])
                .data()
                .reduce(function (a, b) {
                  return intVal(a) + intVal(b);
                }, 0);

              // Total over this page
              pageTotal = api
                .column(loopfoot[idx], { page: 'current' })
                .data()
                .reduce(function (a, b) {
                  return intVal(a) + intVal(b);
                }, 0);

              $(api.column(loopfoot[idx]).footer()).html(total).number(true, 2);

              $(api.column(loopfoot[idx]).footer()).number(true, 2);
            }
          }

          if (tabledata.attr('id') == 'reportbelinonvendor') {
            var loopfoot = [5, 6, 7, 8, 9, 10];
            for (var idx in loopfoot) {
              total = api
                .column(loopfoot[idx])
                .data()
                .reduce(function (a, b) {
                  return intVal(a) + intVal(b);
                }, 0);

              // Total over this page
              pageTotal = api
                .column(loopfoot[idx], { page: 'current' })
                .data()
                .reduce(function (a, b) {
                  return intVal(a) + intVal(b);
                }, 0);

              $(api.column(loopfoot[idx]).footer()).html(total).number(true, 2);

              $(api.column(loopfoot[idx]).footer()).number(true, 2);
            }
          }

          if (tabledata.attr('id') == 'lapcargomanifest') {
            var loopfoot = [6];
            for (var idx in loopfoot) {
              total = api
                .column(loopfoot[idx])
                .data()
                .reduce(function (a, b) {
                  return intVal(a) + intVal(b);
                }, 0);

              // Total over this page
              pageTotal = api
                .column(loopfoot[idx], { page: 'current' })
                .data()
                .reduce(function (a, b) {
                  return intVal(a) + intVal(b);
                }, 0);

              $(api.column(loopfoot[idx]).footer()).html(total).number(true, 2);

              $(api.column(loopfoot[idx]).footer()).number(true, 2);
            }
          }

          if (tabledata.attr('id') == 'reportpayment') {
            var loopfoot = [3, 4];
            for (var idx in loopfoot) {
              total = api
                .column(loopfoot[idx])
                .data()
                .reduce(function (a, b) {
                  return intVal(a) + intVal(b);
                }, 0);

              // Total over this page
              pageTotal = api
                .column(loopfoot[idx], { page: 'current' })
                .data()
                .reduce(function (a, b) {
                  return intVal(a) + intVal(b);
                }, 0);

              $(api.column(loopfoot[idx]).footer()).html(total).number(true, 2);

              $(api.column(loopfoot[idx]).footer()).number(true, 2);
            }
          }

          if (tabledata.attr('id') == 'reportpiutang') {
            var loopfoot = [3];
            for (var idx in loopfoot) {
              total = api
                .column(loopfoot[idx])
                .data()
                .reduce(function (a, b) {
                  return intVal(a) + intVal(b);
                }, 0);

              // Total over this page
              pageTotal = api
                .column(loopfoot[idx], { page: 'current' })
                .data()
                .reduce(function (a, b) {
                  return intVal(a) + intVal(b);
                }, 0);

              $(api.column(loopfoot[idx]).footer()).html(total).number(true, 2);

              $(api.column(loopfoot[idx]).footer()).number(true, 2);
            }
          }
        }
      },
      fnRowCallback: function (nRow, aData, iDisplayIndex) {
        if (tableName == 'tablestokmasuk') {
          if (parseInt(aData.statusmuat) == 0) {
            $(nRow)
              .children()
              .last()
              .prev()
              .html('<span class="badge badge-warning">Pending</span>');
          }

          if (parseInt(aData.statusmuat) == 1) {
            $(nRow)
              .children()
              .last()
              .prev()
              .html('<span class="badge badge-success">Approved</span>');
          }

          if (parseInt(aData.statusmuat) == 2) {
            $(nRow)
              .children()
              .last()
              .prev()
              .html('<span class="badge badge-danger">Reject</span>');
          }
        }

        if (tableName == 'tbloadinglist') {
          if (parseInt(aData.kdcm) > 0) {
            $(nRow)
              .children()
              .last()
              .find('.remove-record,.btn-edit,.btn-gerbong,.btn-auto-gerbong')
              .remove();
          }

          if (parseInt(aData.setgerbong) > 0) {
            $(nRow).children().last().find('.btn-auto-gerbong').remove();
          }
        }

        if (tableName == 'datatablebelivendor') {
          if (aData.statusbelivendor == 'Deleted') {
            $(nRow).children().last().find('.btn-group').remove();
          }
        }

        if (tableName == 'tablebiayajual') {
          if (aData.statusbiayajual == 'Deleted') {
            $(nRow).children().last().find('.btn-group').remove();
          }
        }

        if (tableName == 'tabelbiayalainbeli') {
          if (aData.statusbiayabeli == 'Deleted') {
            $(nRow).children().last().find('.btn-group').remove();
          }
        }

        if (tableName == 'datatablerc') {
          if (aData.statusbelirc == 'Deleted') {
            $(nRow).children().last().find('.btn-group').remove();
          }
        }

        if (tableName == 'tablechoosejual') {
          if (aData.remarksdoorasal && aData.remarksdoorasal != '') {
            $(nRow)
              .children()
              .find('.doorasal')
              .attr('data-doorasal', aData.remarksdoorasal);
          } else {
            $(nRow).children().find('.doorasal').remove();
          }

          if (aData.remarksdoortujuan && aData.remarksdoortujuan != '') {
            $(nRow)
              .children()
              .find('.doortujuan')
              .attr('data-doortujuan', aData.remarksdoortujuan);
          } else {
            $(nRow).children().find('.doortujuan').remove();
          }
        }

        if (tableName == 'tablelistpayment') {
          if (
            $(nRow)
              .children()
              .last()
              .find('.remove-record')
              .attr('data-location') != ''
          ) {
            if (
              window.currentlocation !=
              $(nRow)
                .children()
                .last()
                .find('.dropdown-menu')
                .attr('data-location')
            ) {
              var id = +$('body').attr('data-id');
              if (!JSON.parse(window.exceptid).includes(id)) {
                $(nRow).children().last().find('.approvepayment').remove();
                $(nRow).children().last().find('.remove-record').remove();
              }
            }
          }
        }

        if (tableName == 'tabletracking') {
          if (window.currentlocation != aData.location) {
            $(nRow).children().last().find('.btn-group').remove();
          }
        }

        if (tableName == 'tablepenjualan') {
          if (
            window.currentlocation ==
            $(nRow)
              .children()
              .last()
              .find('.remove-record')
              .attr('data-location')
          ) {
            $(nRow).children().last().find('.remove-record').remove();
          }

          if (parseInt(aData.jualnoinv) == 0) {
            $(nRow).children().last().find('.btn-group').remove();
          }

          if (parseInt(aData.statusjualdelete) == 3) {
            $(nRow).children().last().find('.btn-group').remove();
          }

          var id = +$('body').attr('data-id');
          if (!JSON.parse(window.exceptid).includes(id)) {
            $(nRow).children().last().find('.hidejual').remove();
          }
        }

        if (tableName == 'tablelistinvoice') {
          if (
            (parseFloat(aData.statbayar) == 0 &&
              parseInt(aData.totalfinal) > 0) ||
            parseInt(aData.statusinv) == 3
          ) {
            var id = +$('body').attr('data-id');
            if (!JSON.parse(window.exceptid).includes(id)) {
              $(nRow)
                .children()
                .last()
                .find('.remove-record,.edit-row')
                .remove();
            }
          }

          if (window.currentlocation != aData.location) {
            var id = +$('body').attr('data-id');
            if (!JSON.parse(window.exceptid).includes(id)) {
              $(nRow)
                .children()
                .last()
                .find('.dropdown-menu a')
                .not('.edit-row')
                .remove();
            }
          }
        }

        if (tableName == 'datatablebelivendor') {
          if (aData.statusbelivendor == 'Deleted') {
            var id = +$('body').attr('data-id');
            if (!JSON.parse(window.exceptid).includes(id)) {
              $(nRow)
                .children()
                .last()
                .find('.remove-record,.edit-row')
                .remove();
            }
          } else if (aData.statusbelivendor == 'Lunas') {
            var id = +$('body').attr('data-id');
            if (!JSON.parse(window.exceptid).includes(id)) {
              $(nRow).children().last().find('.edit-row').remove();
            }
          }
        }

        if (tableName == 'reportinvoicepph') {
          console.log(
            $(nRow).children('td:nth-child(4)').html(),
            'datepicer status'
          );
          if (
            $(nRow).children('td:nth-child(4)').find('input.datepicker')
              .length > 0
          ) {
            $(nRow)
              .children('td:nth-child(4)')
              .find('input.datepicker')
              .datepicker({
                autoclose: true,
                dateFormat: 'dd/mm/yy',
              });
          }
        }

        if (tableName == 'datatablerc') {
          var id = +$('body').attr('data-id');
          if (
            aData.statusbelirc == 'Lunas' ||
            aData.statusbelirc == 'Deleted'
          ) {
            if (!JSON.parse(window.exceptid).includes(id)) {
              $(nRow)
                .children()
                .last()
                .find('.remove-record,.edit-row')
                .remove();
            }
          }
        }

        if (tableName == 'tablebiayajual') {
          var id = +$('body').attr('data-id');
          if (
            aData.statusbiayajual == 'Lunas' ||
            aData.statusbiayajual == 'Deleted'
          ) {
            if (!JSON.parse(window.exceptid).includes(id)) {
              $(nRow)
                .children()
                .last()
                .find('.remove-record,.edit-row')
                .remove();
            }
          }
        }

        if (tableName == 'tabelbiayalainbeli') {
          var id = +$('body').attr('data-id');
          if (
            aData.statusbiayabeli == 'Lunas' ||
            aData.statusbiayabeli == 'Deleted'
          ) {
            if (!JSON.parse(window.exceptid).includes(id)) {
              $(nRow)
                .children()
                .last()
                .find('.remove-record,.edit-row')
                .remove();
            }
          }
        }

        if (statpaymentidx.length > 0) {
          if (typeof aData.statpayment != 'undefined') {
            if (parseInt(aData.statpayment) > 0) {
              $(nRow).children().last().find('.approvepayment').remove();
            }
          }
        }

        if (typeof aData.fileattach != 'undefined') {
          if (aData.fileattach == '' || aData.fileattach == null) {
            $(nRow).children().last().find('.btn-downloadfile').remove();
          }
        }

        if (
          tableName == 'tablemastercust' ||
          tableName == 'tablemastervendor' ||
          tableName == 'tablecustharga' ||
          tableName == 'tablehargajual' ||
          tableName == 'tablehargabeli' ||
          tableName == 'tablecontainer' ||
          tableName == 'tableseal' ||
          tableName == 'tableshipper' ||
          tableName == 'tablekereta' ||
          tableName == 'tablepengguna'
        ) {
          var id = +$('body').attr('data-id');
          if (!JSON.parse(window.exceptid).includes(id)) {
            $(nRow).children().last().find('.remove-record').remove();
          }
        }

        if (tableName == 'tbcargomanifest') {
          var id = +$('body').attr('data-id');
          if (parseInt(aData.statuscm) > 1) {
            $(nRow).children().last().find('.confirmapprove').remove();
            if (!JSON.parse(window.exceptid).includes(id)) {
              $(nRow).children().last().find('.btn-edit-cargo').remove();
            }
          }

          if (parseInt(aData.statuscm) == 1) {
            $(nRow).children().last().find('.btn-resendberangkat').remove();
          }

          if (parseInt(aData.statuscm) == 3) {
            // cek berdasar kota
            if (
              aData.cargokota &&
              aData.cargokota.length > 0 &&
              tabledata.data('location') != aData.location
            ) {
              let showkedatangan = false;
              $.each(aData.cargokota, function (idxKota, valKota) {
                if (
                  valKota.kotatujuan === tabledata.data('location') &&
                  parseInt(valKota.statusakhir) < 3
                ) {
                  showkedatangan = true;
                }
              });

              if (!showkedatangan) {
                $(nRow).children().last().find('.btn-kedatangan').remove();
              }
            } else {
              $(nRow).children().last().find('.btn-kedatangan').remove();
            }
          }

          if (
            aData.stasal == null ||
            aData.stasal == '' ||
            aData.sttujuan == '' ||
            aData.sttujuan == null
          ) {
            $(nRow).children().last().find('.confirmapprove').remove();
          }

          if (tabledata.data('location') != aData.location) {
            $(nRow).children().last().find('.confirmapprove').remove();
            $(nRow).children().last().find('.btn-edit-cargo').remove();
            $(nRow).children().last().find('.btn-resendberangkat').remove();
          } else {
            $(nRow).children().last().find('.btn-kedatangan').remove();
            $(nRow).children().last().find('.btn-resendkedatangan').remove();
          }
        }

        if (tableName == 'tabledepo') {
          if (parseInt(aData.deleted) > 0) {
            $(nRow)
              .children()
              .first()
              .html('<span class="badge badge-danger">Deleted</span>');
          }

          if (aData.pembayaran) {
            if (aData.pembayaran.toUpperCase() == 'KREDIT') {
              $(nRow).children().first().find('.btn-kwitansi-depo').remove();
            }
          }

          if (aData.statuscm) {
            var id = +$('body').attr('data-id');
            if (parseInt(aData.statuscm) > 0) {
              if (!JSON.parse(window.exceptid).includes(id)) {
                $(nRow)
                  .children()
                  .first()
                  .find('.remove-record,.edit-record')
                  .remove();
              } else {
                // $(nRow).children().first().find('.edit-record').remove();
              }
            }
          }

          if (aData.dataupdate) {
            if (parseInt(aData.dataupdate) > 0) {
              $(nRow)
                .children()
                .first()
                .next()
                .html(
                  '<div class="editSuccess">' +
                    $(nRow).children().first().next().html() +
                    '</div>'
                );
            }
          }

          if (aData.nexttrans) {
            if (aData.nexttrans != '') {
              $(nRow).children().first().find('.nextitemdepo').remove();
            }
          }

          var url = '<?=$this->uri->segment(1)?>';
          var type = '<?=$this->uri->segment(3)?>';
          if (url != 'depoin' && type != 'bongkaran') {
            $(nRow).children().first().find('.holditem').remove();
          } else {
            if (aData.hold > 0) {
              $(nRow).children().first().find('.holditem').text('Un Hold');
              $(nRow).children().first().find('.nextitemdepo').remove();
            } else {
              $(nRow).children().first().find('.holditem').text('Hold');
            }
          }
        }

        if (tableName == 'datatable-summary') {
          if (aData.approveStatus != '' && aData.approveStatus != null) {
            $(nRow).children().find('a.tasknext').parent().html(aData.stage);
          }
        }

        if (tableName == 'reportinvoice') {
          if (aData.sisapiutang < 0) {
            $(nRow)
              .children()
              .last()
              .prev()
              .html(aData.sisapiutang * -1);
          }
        }

        $(nRow)
          .children()
          .each(function (index, td) {
            if ($.inArray(index, harga) !== -1) {
              var nominal = parseFloat($(td).html());
              var vl = $(td).html();
              if (vl.indexOf('.') > 0) {
                $(td).html(nominal).number(true, 2);
              } else {
                $(td).html(nominal).number(true);
              }
            }

            if (Object.keys(window.checkeddatatable).length > 0) {
              if ($(td).find('input[type=checkbox]').length > 0) {
                if (
                  typeof window.checkeddatatable[
                    'item_' + $(td).find('input[type=checkbox]').val()
                  ] != 'undefined'
                ) {
                  $(td).find('input[type=checkbox]').prop('checked', true);
                }
              }
            }

            if ($.inArray(index, tglupdate) !== -1) {
              var original = $(td).text();
              var time = $(td).html().split(' ');
              var tgl = time[0].split('-');

              if (time.length > 1) {
                if (tgl[0] != '0000') {
                  var tgl = time[0].split('-');
                  if (parseInt(tgl[1]) < 10) {
                    $(td).html(
                      '<div data-tanggal="' +
                        original +
                        '">' +
                        tgl[2] +
                        ' ' +
                        monthNamesod[parseInt(tgl[1].replace('0', '')) - 1] +
                        ' ' +
                        tgl[0].toString().substr(2, 2) +
                        ' ' +
                        time[1] +
                        '</div>'
                    );
                  } else {
                    $(td).html(
                      '<div data-tanggal="' +
                        original +
                        '">' +
                        tgl[2] +
                        ' ' +
                        monthNamesod[parseInt(tgl[1]) - 1] +
                        ' ' +
                        tgl[0].toString().substr(2, 2) +
                        ' ' +
                        time[1] +
                        '</div>'
                    );
                  }
                } else {
                  $(td).html('');
                }
              } else {
                if (time[0] != '') {
                  if (tgl[0] != '0000') {
                    var tgl = time[0].split('-');
                    if (parseInt(tgl[1]) < 10) {
                      $(td).html(
                        '<div data-tanggal="' +
                          original +
                          '">' +
                          tgl[2] +
                          ' ' +
                          monthNamesod[parseInt(tgl[1].replace('0', '')) - 1] +
                          ' ' +
                          tgl[0].toString().substr(2, 2) +
                          '</div>'
                      );
                    } else {
                      $(td).html(
                        '<div data-tanggal="' +
                          original +
                          '">' +
                          tgl[2] +
                          ' ' +
                          monthNamesod[parseInt(tgl[1]) - 1] +
                          ' ' +
                          tgl[0].toString().substr(2, 2) +
                          '</div>'
                      );
                    }
                  } else {
                    $(td).html('');
                  }
                }
              }
            }

            if ($.inArray(index, listconcatidx) !== -1) {
              let list = $(td).html().replace(/,/g, '<br />');
              $(td).html(list);
            }

            if ($.inArray(index, pembayarandepoidx) !== -1) {
              if ($(td).html() == 'Tunai') {
                if (
                  parseInt(aData.bayartunai) == 0 &&
                  (parseInt(aData.biayastorageday) > 0 ||
                    parseInt(aData.biayadetention) > 0 ||
                    parseInt(aData.biayaseal) > 0 ||
                    parseInt(aData.biayalifton) > 0 ||
                    parseInt(aData.biayaliftoff) > 0 ||
                    parseInt(aData.biayakuli) > 0)
                ) {
                  $(td).html(
                    '<span class="label-status badge bg-info">Available</span>'
                  );
                } else if (parseInt(aData.bayartunai) == 0) {
                  $(td).html(
                    '<span class="label-status badge bg-info">No Payment</span>'
                  );
                } else {
                  $(td).html(
                    '<span class="label-status badge bg-success">Diterima</span>'
                  );
                }
              } else {
                $(td).html(
                  '<span class="label-status badge bg-orange">Kredit</span>'
                );
              }

              if (aData.kondisi != '' && aData.kondisi != null) {
                $(nRow)
                  .children()
                  .last()
                  .html('<span class="badge badge-danger">Canceled</span>');
              }
            }

            if ($.inArray(index, statpaymentidx) !== -1) {
              if ($(td).html() == '0') {
                $(td).html(
                  '<span class="label-status badge bg-warning">Need Approval</span>'
                );
              } else if ($(td).html() == '1') {
                $(td).html(
                  '<span class="label-status badge bg-info">Approve</span>'
                );
              } else if ($(td).html() == '3') {
                $(td).html(
                  '<span class="label-status badge bg-danger">Deleted</span>'
                );
              }
            }

            if ($.inArray(index, statusjualidx) !== -1) {
              if (aData.statusjualdelete == 3) {
                $(td).html(
                  '<span class="label-status badge bg-danger">Deleted</span>'
                );
              } else {
                if ($(td).html() == '0' || $(td).html() == '') {
                  $(td).html(
                    '<span class="label-status badge bg-info">New Sale</span>'
                  );
                } else if ($(td).html() != '') {
                  $(td).html(
                    '<span class="label-status badge bg-danger">' +
                      $(td).html() +
                      ' invoice</span>'
                  );
                }
              }
            }

            if ($.inArray(index, terjualidx) !== -1) {
              if ($(td).html() == '0' || $(td).html() == '') {
                $(td).html(
                  '<span class="label-status badge bg-info">In Stok</span>'
                );
              } else if ($(td).html() != '') {
                $(td).html(
                  '<span class="label-status badge bg-danger">Sale</span>'
                );
              }
            }

            if ($.inArray(index, stokloadingstatus) !== -1) {
              if ($(td).html() == '') {
                $(td).html(
                  '<span class="label-status badge bg-info">New Item</span>'
                );
              } else if ($(td).html() != '') {
                $(td).html(
                  '<a href="javascript:void(0)" class="label-status badge bg-success btn-cetak-loadinglist" data-loading="' +
                    aData.idloading +
                    '">' +
                    $(td).html() +
                    '</a>'
                );
              }
            }

            if ($.inArray(index, statactiveidx) !== -1) {
              if ($(td).html() == '0') {
                $(td).html(
                  '<span class="label-status badge bg-info">Not Active</span>'
                );
              } else if ($(td).html() == '1') {
                $(td).html(
                  '<span class="label-status badge bg-success">Active</span>'
                );
              } else if ($(td).html() == '2') {
                $(td).html(
                  '<span class="label-status badge bg-warning">Complete</span>'
                );
              }
            }

            if ($.inArray(index, statbayaridx) !== -1) {
              if (parseInt(aData.statusinv) == 3) {
                $(td).html(
                  '<span class="label-status badge bg-danger">Deleted</span>'
                );
              } else {
                if (parseFloat($(td).html()) > 0) {
                  $(td).html(
                    '<span class="label-status badge bg-info">Belum Lunas</span>'
                  );
                } else if (parseInt($(td).html()) == 0) {
                  $(td).html(
                    '<span class="label-status badge bg-success">Lunas</span>'
                  );
                }

                if (parseFloat($(td).html()) < 0) {
                  $(td).html(
                    '<span class="label-status badge bg-success">Lunas</span>'
                  );
                }

                if (
                  tableName == 'tablelistinvoice' &&
                  parseInt(aData.totalfinal) == 0 &&
                  aData.statbayar == 0
                ) {
                  $(td).html(
                    '<span class="label-status badge bg-info">Belum Lunas</span>'
                  );
                }
              }
            }

            if ($.inArray(index, statinvidx) !== -1) {
              if ($(td).html() == '1') {
                $(td).html(
                  '<span class="label-status badge bg-info">Belum Lunas</span>'
                );
              } else if ($(td).html() == '2') {
                $(td).html(
                  '<span class="label-status badge bg-success">Lunas</span>'
                );
              }
            }

            if ($.inArray(index, colnumberidx) !== -1) {
              var checkDecimal = $(td).html().split('.');
              if (checkDecimal.length > 1 && parseInt(checkDecimal[1]) > 0) {
                $(td).html($.number($(td).html(), 2));
              } else {
                $(td).html($.number($(td).html()));
              }
            }

            if ($.inArray(index, statuscmidx) !== -1) {
              if ($(td).html() == '1') {
                $(td).html(
                  '<span class="label-status badge bg-info">Need Approve</span>'
                );
              } else if ($(td).html() == '2') {
                $(td).html(
                  '<span class="label-status badge bg-success">Approved</span>'
                );
              } else if ($(td).html() == '3') {
                $(td).html(
                  '<span class="label-status badge bg-warning">Arrived</span>'
                );
              } else if ($(td).html() == '4') {
                $(td).html(
                  '<span class="label-status badge bg-danger">Deleted</span>'
                );
              }
            }

            if ($.inArray(index, cargokotaidx) !== -1) {
              if (aData.cargokota) {
                if (aData.statuscm == 1) {
                  $(td).html(
                    '<span class="label-status badge bg-info badge-sm">Need Approve</span>'
                  );
                } else if (aData.statuscm == 4) {
                  $(td).html(
                    '<span class="label-status badge bg-danger badge-sm">Deleted</span>'
                  );
                } else {
                  let dataHtml = '';
                  $.each(aData.cargokota, function (idx, val) {
                    if (!val.arrivedby || val.arrivedby == 0) {
                      dataHtml +=
                        '<div><span class="label-status badge bg-info badge-sm" style="margin-right:5px;">Need Approve</span>' +
                        val.kotatujuan.capitalize() +
                        '</div>';
                    } else {
                      dataHtml +=
                        '<div><span class="label-status badge bg-warning badge-sm" style="margin-right:5px;">Arrived</span>' +
                        val.kotatujuan.capitalize() +
                        '</div>';
                      if (tabledata.data('location') == val.kotatujuan) {
                        $(nRow)
                          .children()
                          .last()
                          .find('.btn-kedatangan')
                          .remove();
                      }
                    }
                  });

                  $(td).html(dataHtml);
                }
              }
            }

            if ($.inArray(index, statusmuatidx) !== -1) {
              if ($(td).html() == '1') {
                $(td).html(
                  '<span class="label-status badge bg-info">New Loading</span>'
                );
              } else if ($(td).html() == '2') {
                $(td).html(
                  '<span class="label-status badge bg-success">Approve</span>'
                );
              } else if ($(td).html() == '3') {
                $(td).html(
                  '<span class="label-status badge bg-warning">' +
                    aData.kdcm +
                    '</span>'
                );
              } else if ($(td).html() == '4') {
                $(td).html(
                  '<span class="label-status badge bg-danger">Deleted</span>'
                );
              }
            }

            if ($.inArray(index, loadingstatidx) !== -1) {
              if ($(td).html() == '1') {
                $(td).html(
                  '<span class="label-status badge bg-info">New Loading</span>'
                );
              } else if ($(td).html() == '2') {
                $(td).html(
                  '<span class="label-status badge bg-warning">Need Approval</span>'
                );
              } else if ($(td).html() == '3') {
                $(td).html(
                  '<span class="label-status badge bg-danger">Deleted</span>'
                );
              } else if ($(td).html() == '4') {
                $(td).html(
                  '<span class="label-status badge bg-success">Approved</span>'
                );
              }
            }

            if ($.inArray(index, statusstage) !== -1) {
              if ($(td).html() == '2') {
                $(td).html(
                  '<span class="label-status bg-success">Complete</span>'
                );
              } else if ($(td).html() == '1') {
                $(td).html(
                  '<span class="label-status bg-info">In Progress</span>'
                );
              } else {
                $(td).html(
                  '<span class="label-status bg-warning">New Stage</span>'
                );
              }
            }
          });
      },
      fnDrawCallback: function (aData) {
        $.fn.tooltip && $('[data-toggle="tooltip"]').tooltip();

        if (lastdate.length > 0) {
          lastdate.sort(function (a, b) {
            var c = new Date(a.date);
            var d = new Date(b.date);
            return c - d;
          });

          if (typeof lastdate[lastdate.length - 1] != 'undefined') {
            if (typeof lastdate[lastdate.length - 1].date != 'undefined') {
              $('#tglKwitansi').val(
                moment(lastdate[lastdate.length - 1].date).format('DD/MM/YYYY')
              );
            }
          }
        }
      },
      fnServerData: function (sSource, aoData, fnCallback) {
        $.ajax({
          dataType: 'json',
          type: 'POST',
          url: sSource,
          data: aoData,
          success: fnCallback,
        });
      },
    });
  }

  window.createTable = createTable;

  if ($('.datepicker').length > 0) {
    $('.datepicker').datepicker({
      autoclose: true,
      dateFormat: 'dd/mm/yy',
    });
  }

  $(document).on('click', '.remove-record', function (e) {
    e.preventDefault();
    var href = $(this).attr('href');
    var thiselement = $(this);
    var tableid = $(this).closest('table').attr('id');

    if ($('#' + tableid).length > 0) {
      var table = $('#' + tableid).DataTable();
    }

    swal(
      {
        title: 'Anda yakin menghapus data ini ?',
        text: '',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Hapus',
        cancelButtonText: 'Batalkan',
        closeOnConfirm: false,
        closeOnCancel: false,
      },
      function (isConfirm) {
        if (isConfirm) {
          var value = '; ' + document.cookie;
          var parts = value.split('; blp_cookie=');

          $.ajax({
            url: href,
            type: 'POST',
            data: {
              blp_token: parts.pop().split(';').shift(),
            },
            success: function (response) {
              let data = $.parseJSON(response);
              if (response == 1 && !data.error) {
                table.ajax.reload(null, false);
                swal('Deleted!', 'Data berhasil dihapus', 'success');
              } else {
                swal(
                  'Canceled',
                  data.error ? data.error : 'Data gagal dihapus',
                  'error'
                );
              }
            },
          });
        } else {
          swal('Canceled', 'Penghapusan Data Dibatalkan', 'error');
        }
      }
    );
  });

  $(document).on('click', '.hidejual', function (e) {
    e.preventDefault();
    var href = $(this).attr('href');
    var thiselement = $(this);
    var tableid = $(this).closest('table').attr('id');

    if ($('#' + tableid).length > 0) {
      var table = $('#' + tableid).DataTable();
    }

    swal(
      {
        title: 'Yakin Menyembunyikan Data Ini ?',
        text: '',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Hide',
        cancelButtonText: 'Cancel',
        closeOnConfirm: false,
        closeOnCancel: false,
      },
      function (isConfirm) {
        if (isConfirm) {
          var value = '; ' + document.cookie;
          var parts = value.split('; blp_cookie=');

          $.ajax({
            url: href,
            type: 'POST',
            data: {
              blp_token: parts.pop().split(';').shift(),
            },
            success: function (response) {
              if (response == 1) {
                table.ajax.reload(null, false);
                swal('Deleted!', 'Data berhasil disembunyikan', 'success');
              } else {
                swal('Canceled', 'Data gagal disembunyikan', 'error');
              }
            },
          });
        } else {
          swal('Canceled', 'Menyembunyikan Data Dibatalkan', 'error');
        }
      }
    );
  });
});
