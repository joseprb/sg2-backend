let data = [
    {
        nim : "1234567891",
        nama : "dadang",
        kelas : "IF-41-07"
    },
    {
        nim : "1234567892",
        nama : "maman",
        kelas : "IF-41-04"
    }
]

exports.getMhs = (req, res) => {
    res.send(data)
}

exports.getMhsByIndex = (req, res) => {
    res.send(data[req.params.index]);
}

exports.insertMhs = (req, res) => {
    let mahasiswa = {
        nim : req.body.nim,
        nama : req.body.nama,
        kelas : req.body.kelas
    }
    // data.splice(data.length, 0, mahasiswa);
    data.push(mahasiswa)
    res.send(data)
    console.log("insert user berhasil")
}

exports.updateMhs = (req, res) => {
    let update_mhs = {
        nim : req.body.nim,
        nama : req.body.nama,
        kelas : req.body.kelas
    }
    // data.splice(req.params.index, 1, update_mhs)
    data[req.params.index] = update_mhs
    res.send(data)
}

exports.delMhs = (req, res) => {
    data.splice(req.params.index, 1)
    res.send(data)
}